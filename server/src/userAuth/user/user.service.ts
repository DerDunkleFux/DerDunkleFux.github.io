import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/firestore/firestore.service';
import * as admin from 'firebase-admin';

@Injectable()
export class UserService {
    private db: Promise<admin.firestore.Firestore> = this.firestoreService.getDb();

    constructor(private readonly firestoreService: FirestoreService) {

    }
    async getUsers(): Promise<any> {
        
        let users = await (await this.db).collection("Users").get();
        users.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
          });
    }

    async registerUser(): Promise<any> {

    }
}
