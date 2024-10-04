import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { FirestoreService } from 'src/firestore/firestore.service';

@Module({
  controllers: [UserController],
  providers: [UserService, FirestoreService]
})
export class UserModule {}
