import { Module } from '@nestjs/common';
import { AppController, TweetsController, UsersController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController, TweetsController, UsersController],
  providers: [AppService],
})
export class AppModule { }
