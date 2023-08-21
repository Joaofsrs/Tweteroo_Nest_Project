import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/dtos/create-user.dto';
import { User } from './entities/user-entity';
import { Tweet } from './entities/tweet.entity';
import { CreateTweetDTO } from './dtos/create-tweet.dto';


@Injectable()
export class AppService {
  private users: User[];
  private tweets: Tweet[];

  constructor() {
    this.users = [
      new User("didi", "https://avatars.akamai.steamstatic.com/d322ffa327f56fcebc08ac76b340742b930648c8_full.jpg"),
      new User("let", "https://avatars.akamai.steamstatic.com/d322ffa327f56fcebc08ac76b340742b930648c8_full.jpg"),
      new User("thicode", "https://avatars.akamai.steamstatic.com/d322ffa327f56fcebc08ac76b340742b930648c8_full.jpg"),
      new User("spongebob", "https://avatars.akamai.steamstatic.com/d322ffa327f56fcebc08ac76b340742b930648c8_full.jpg")
    ];

    this.tweets = [
      new Tweet(this.users[0], "You like krabby patties, dont you @Squidward?"),
      new Tweet(this.users[1], "You like krabby patties, dont you?"),
      new Tweet(this.users[2], "You like krabby patties, dont?"),
      new Tweet(this.users[3], "You like krabby patties?")
    ];
  }

  getUsers() {
    return this.users;
  }

  createUser(body: CreateUserDTO) {
    const user = new User(body.username, body.avatar);
    return this.users.push(user);
  }

  getTweet() {
    const last = this.tweets.slice(this.tweets.length - 15);
    return last;
  }

  createTweet(body: CreateTweetDTO) {
    //const tweet = new Tweet(body.username, body.avatar);
    return "this.tweets.push(tweet)";
  }

  getHello(): string {
    return 'Hello World!';
  }
}