import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as functions from 'firebase-functions';



  async function createNestServer() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    // check if dev or prod
    app.setGlobalPrefix('api');
    // if (process.env.FUNCIONS_EMULATOR || process.env.NODE_ENV !== 'production') {
      // In Dev mode
      await app.listen(3000);
      console.log("App running on http://localhost:3000/");
      // TODO: Link angular firebase url
      // app.enableCors({
      //   origin: ['https://your-angular-frontend-url.firebaseapp.com'],  // Update with your actual frontend URL
      //   methods: 'GET,POST,PUT,DELETE',
      // });
    // } else {
    //   // In Prod mode
    //   await app.init();
    //   console.log("App running on firebase hostings");
    // }
    return app;
}

export const server = createNestServer()
  .then(val => {console.log("Nest ready"); return val})
  .catch(err => {console.log("Nest broken:", err); throw err});






