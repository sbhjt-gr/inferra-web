import { db } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function testFirebaseConnection() {
  try {
    const testData = {
      test: true,
      timestamp: new Date().toISOString(),
    };
    
    const docRef = await addDoc(collection(db, 'test'), testData);
    console.log('Firebase test successful, document ID:', docRef.id);
    return { success: true, docId: docRef.id };
  } catch (error) {
    console.error('Firebase test failed:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
