import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';

@Injectable()
export class FirestoreService {
    private db: admin.firestore.Firestore;

  constructor(private configService: ConfigService) {
    // Initialize Firebase Admin SDK
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(configService.get('SERVICE_ACCOUNT_KEY_FILE')
          // Path to your service account key file,
        ),
        databaseURL: configService.get('DATABASE_URL'), //Use your database URL
      });
    }
    this.db = admin.firestore();
  }

  async getDb(): Promise<admin.firestore.Firestore> {
    return this.db
  }
}
