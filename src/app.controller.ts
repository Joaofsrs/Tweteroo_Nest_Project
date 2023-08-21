import { AppService } from './app.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { CreateTweetDTO } from './dtos/create-tweet.dto';


@Controller('teste')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('sign-up')
export class UsersController {

  constructor(private appService: AppService) {}

  @Get()
  getUsers() {
    return this.appService.getUsers();
  }

  @Post()
  createUser(@Body() body: CreateUserDTO) {
    return this.appService.createUser(body);
  }

}

@Controller('tweets')
export class TweetsController {

  constructor(private appService: AppService) {}

  @Get()
  getTweet() {
    return this.appService.getTweet();
  }

  @Get(":username")
  findOne(username: string) {
    console.log(username);
    return username; // usuário correspondente ao id
  }

  @Post()
  createTweet(@Body() body: CreateTweetDTO) {
    return this.appService.createTweet(body);
  }

}
