import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

interface ReportData {
  messageContent: string;
  provider: string;
  category: string;
  description: string;
  email: string;
  userId?: string | null;
  timestamp: string;
  appVersion: string;
  platform: string;
}

const MAX_FILE_SIZE = 40 * 1024 * 1024;
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'video/mp4', 'video/quicktime', 'video/mov'];

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || '';
    
    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      
      const reportData = {
        messageContent: formData.get('messageContent') as string,
        provider: formData.get('provider') as string,
        category: formData.get('category') as string,
        description: formData.get('description') as string,
        email: formData.get('email') as string,
        userId: formData.get('userId') as string || null,
        originalTimestamp: formData.get('timestamp') as string,
        appVersion: formData.get('appVersion') as string,
        platform: formData.get('platform') as string,
      };

      if (!reportData.messageContent || !reportData.provider || !reportData.category || 
          !reportData.description || !reportData.email) {
        return NextResponse.json(
          { success: false, error: 'Missing required fields' },
          { status: 400 }
        );
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(reportData.email)) {
        return NextResponse.json(
          { success: false, error: 'Invalid email format' },
          { status: 400 }
        );
      }

      const attachments = [];
      const files = formData.getAll('attachments') as File[];
      
      if (files.length > 0) {
        const uploadDir = join(process.cwd(), 'public', 'uploads');
        if (!existsSync(uploadDir)) {
          await mkdir(uploadDir, { recursive: true });
        }
        
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          if (!file || file.size === 0) continue;
          
          if (file.size > MAX_FILE_SIZE) {
            return NextResponse.json(
              { success: false, error: `File ${file.name} exceeds 40MB limit` },
              { status: 400 }
            );
          }
          
          if (!ALLOWED_TYPES.includes(file.type)) {
            return NextResponse.json(
              { success: false, error: `File type ${file.type} not allowed` },
              { status: 400 }
            );
          }
          
          const timestamp = Date.now();
          const extension = file.name.split('.').pop() || 'bin';
          const filename = `report_${timestamp}_${i}.${extension}`;
          
          try {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);
            
            await writeFile(join(uploadDir, filename), buffer);
            
            attachments.push({
              fileName: file.name,
              storedFileName: filename,
              fileSize: file.size,
              fileType: file.type,
              type: file.type.startsWith('image/') ? 'image' : 'video',
              url: `/uploads/${filename}`,
              uploadedAt: new Date().toISOString(),
            });
          } catch (error) {
            console.error('Error saving file:', error);
            return NextResponse.json(
              { success: false, error: `Failed to save file ${file.name}` },
              { status: 500 }
            );
          }
        }
      }
      
      const finalReportData = {
        messageContent: reportData.messageContent,
        provider: reportData.provider,
        category: reportData.category,
        description: reportData.description,
        email: reportData.email,
        userId: reportData.userId,
        submittedAt: serverTimestamp(),
        originalTimestamp: reportData.originalTimestamp,
        appVersion: reportData.appVersion,
        platform: reportData.platform,
        status: 'pending',
        reviewedAt: null,
        reviewedBy: null,
        resolution: null,
        attachments: attachments.length > 0 ? attachments : null,
        attachmentCount: attachments.length,
      };
      
      const docRef = await addDoc(collection(db, 'reports'), finalReportData);
      
      console.log('Report with attachments submitted successfully:', docRef.id);
      
      return NextResponse.json({
        success: true,
        reportId: docRef.id,
        attachmentCount: attachments.length,
        message: 'Report submitted successfully'
      });
      
    } else {
      const body: ReportData = await request.json();

      if (!body.messageContent || !body.provider || !body.category || !body.description || !body.email) {
        return NextResponse.json(
          { success: false, error: 'Missing required fields' },
          { status: 400 }
        );
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.email)) {
        return NextResponse.json(
          { success: false, error: 'Invalid email format' },
          { status: 400 }
        );
      }

      const reportData = {
        messageContent: body.messageContent,
        provider: body.provider,
        category: body.category,
        description: body.description,
        email: body.email,
        userId: body.userId || null,
        submittedAt: serverTimestamp(),
        originalTimestamp: body.timestamp,
        appVersion: body.appVersion,
        platform: body.platform,
        status: 'pending',
        reviewedAt: null,
        reviewedBy: null,
        resolution: null,
        attachments: null,
        attachmentCount: 0,
      };

      const docRef = await addDoc(collection(db, 'reports'), reportData);

      console.log('Report submitted successfully:', docRef.id);

      return NextResponse.json({
        success: true,
        reportId: docRef.id,
        message: 'Report submitted successfully'
      });
    }
    
  } catch (error) {
    console.error('Error submitting report:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    );
  }
}
