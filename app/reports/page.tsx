'use client';

import { useEffect, useState } from 'react';
import { db } from '../../lib/firebase';
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore';

interface Report {
  id: string;
  messageContent: string;
  provider: string;
  category: string;
  description: string;
  email: string;
  userId?: string | null;
  submittedAt: any;
  originalTimestamp: string;
  appVersion: string;
  platform: string;
  status: 'pending' | 'reviewed' | 'resolved';
  reviewedAt?: any;
  reviewedBy?: string;
  resolution?: string;
  attachments?: Array<{
    fileName: string;
    storedFileName: string;
    fileSize: number;
    fileType: string;
    type: 'image' | 'video';
    url: string;
    uploadedAt: string;
  }> | null;
  attachmentCount?: number;
}

const CATEGORY_LABELS: Record<string, string> = {
  harmful: 'Harmful or unsafe content',
  inappropriate: 'Inappropriate or explicit content',
  misinformation: 'Misinformation or false claims',
  bias: 'Bias or discrimination',
  privacy: 'Privacy concerns',
  quality: 'Poor quality or irrelevant response',
  other: 'Other',
};

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'reviewed' | 'resolved'>('all');

  useEffect(() => {
    const q = query(
      collection(db, 'reports'),
      orderBy('submittedAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reportsData: Report[] = [];
      querySnapshot.forEach((doc) => {
        reportsData.push({
          id: doc.id,
          ...doc.data()
        } as Report);
      });
      setReports(reportsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateReportStatus = async (reportId: string, status: 'pending' | 'reviewed' | 'resolved', resolution?: string) => {
    try {
      const reportRef = doc(db, 'reports', reportId);
      await updateDoc(reportRef, {
        status,
        reviewedAt: new Date(),
        reviewedBy: 'admin',
        ...(resolution && { resolution })
      });
    } catch (error) {
      console.error('Error updating report status:', error);
    }
  };

  const filteredReports = reports.filter(report => {
    if (filter === 'all') return true;
    return report.status === filter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'reviewed': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">Loading reports...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Content Reports</h1>
          <p className="text-gray-600">Manage AI-generated content reports from the mobile app.</p>
        </div>

        {/* Filter buttons */}
        <div className="mb-6 flex gap-2">
          {(['all', 'pending', 'reviewed', 'resolved'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg capitalize ${
                filter === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {status} ({status === 'all' ? reports.length : reports.filter(r => r.status === status).length})
            </button>
          ))}
        </div>

        {/* Reports list */}
        <div className="space-y-6">
          {filteredReports.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No reports found.</p>
            </div>
          ) : (
            filteredReports.map((report) => (
              <div key={report.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                        {report.status}
                      </span>
                      <span className="text-sm text-gray-500">
                        {report.submittedAt?.toDate?.()?.toLocaleDateString() || 'Unknown date'}
                      </span>
                      <span className="text-sm text-gray-500">
                        Provider: {report.provider}
                      </span>
                      <span className="text-sm text-gray-500">
                        Platform: {report.platform}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {CATEGORY_LABELS[report.category] || report.category}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    {report.status === 'pending' && (
                      <>
                        <button
                          onClick={() => updateReportStatus(report.id, 'reviewed')}
                          className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                        >
                          Mark Reviewed
                        </button>
                        <button
                          onClick={() => updateReportStatus(report.id, 'resolved', 'Issue resolved')}
                          className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                        >
                          Mark Resolved
                        </button>
                      </>
                    )}
                    {report.status === 'reviewed' && (
                      <button
                        onClick={() => updateReportStatus(report.id, 'resolved', 'Issue resolved')}
                        className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                      >
                        Mark Resolved
                      </button>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Description:</h4>
                    <p className="text-gray-700 bg-gray-50 p-3 rounded">{report.description}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Reported Message:</h4>
                    <div className="bg-gray-50 p-3 rounded max-h-40 overflow-y-auto">
                      <pre className="whitespace-pre-wrap text-sm text-gray-700">{report.messageContent}</pre>
                    </div>
                  </div>

                  {report.attachments && report.attachments.length > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Attachments:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {report.attachments.map((attachment, index) => (
                          <div key={index} className="relative bg-gray-50 rounded-lg overflow-hidden">
                            {attachment.type === 'image' ? (
                              <div className="aspect-square">
                                <img
                                  src={attachment.url}
                                  alt={`Attachment ${index + 1}`}
                                  className="w-full h-full object-cover cursor-pointer hover:opacity-80"
                                  onClick={() => window.open(attachment.url, '_blank')}
                                />
                              </div>
                            ) : attachment.type === 'video' ? (
                              <div className="aspect-square relative">
                                <video
                                  src={attachment.url}
                                  className="w-full h-full object-cover cursor-pointer"
                                  controls
                                  preload="metadata"
                                />
                                <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                                  VIDEO
                                </div>
                              </div>
                            ) : null}
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2">
                              <div className="truncate">{attachment.fileName}</div>
                              <div>{(attachment.fileSize / 1024 / 1024).toFixed(1)} MB</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                    <span>Contact: {report.email}</span>
                    {report.userId && <span>User ID: {report.userId}</span>}
                    <span>App Version: {report.appVersion}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
