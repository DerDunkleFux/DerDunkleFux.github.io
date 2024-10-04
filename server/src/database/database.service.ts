import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseService {

  private db: admin.firestore.Firestore;

  constructor(private configService: ConfigService) {
    // Initialize Firebase Admin SDK
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(configService.get('SERVICE_ACCOUNT_KEY_FILE')
          // Path to your service account key file,
        ),
        databaseURL: configService.get('DATABASE_URL'), // Use your database URL
      });
    }
    this.db = admin.firestore();
  }

  async getDbInstance(): Promise<admin.firestore.Firestore> {
    return this.db
  }

  // // Example CRUD operations (you'll need to adapt these to your specific needs)
  // async createDocument(collectionName: string, data: any) {
  //   const docRef = this.db.collection(collectionName).doc();
  //   await docRef.set(data);
  //   return docRef.id;
  // }

  // async getDocument(collectionName: string, documentId: string) {
  //   const docRef = this.db.collection(collectionName).doc(documentId);
  //   const doc = await docRef.get();
  //   if (doc.exists) {
  //     return doc.data();
  //   } else {
  //     return null;
  //   }
  // }

  // async updateDocument(collectionName: string, documentId: string, data: any) {
  //   const docRef = this.db.collection(collectionName).doc(documentId);
  //   await docRef.update(data);
  // }

  // async deleteDocument(collectionName: string, documentId: string) {
  //   const docRef = this.db.collection(collectionName).doc(documentId);
  //   await docRef.delete();
  // }
}
