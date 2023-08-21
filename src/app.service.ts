import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDTO } from 'src/dtos/create-user.dto';
import { User } from './entities/user-entity';
import { Tweet } from './entities/tweet.entity';
import { CreateTweetDTO } from './dtos/create-tweet.dto';


@Injectable()
export class AppService {
    users: User[];
    tweets: Tweet[];

    constructor() {
        this.users = [];
        this.tweets = [];
    }   

    getUsers() {
        return this.users;
    }

    createUser(body: CreateUserDTO) {
        const user = new User(body.username, body.avatar);
        return this.users.push(user);
    }

    getTweet(page: number) {
        console.log(page);
        let last = [];
        if(page === undefined){
            last = this.tweets.slice(this.tweets.length-15);
        }else if(page < 1){
            throw new BadRequestException();
        }else if(page == 1){
            last = this.tweets.slice(this.tweets.length-15);
        }else if(page > 1){
            let fim = this.tweets.length - (15 * (page-1));
            let inicio = this.tweets.length - (15 * page);
            if(fim > 0 && inicio >= 0){
                last = this.tweets.slice(inicio, fim);
            }else if(fim > 0 && inicio < 0){
                last = this.tweets.slice(0, fim);
            }else if(fim === 0){
                last = this.tweets.slice(fim);
            }
        
        }
        let formatTweet = []
        last.forEach(tweet => {
            formatTweet.push({
                username: tweet.user.username,
                avatar: tweet.user.avatar,
                tweet: tweet.tweet
            })
        });
        return formatTweet;
    }

    getUserTweet(user: string) {
        const last = this.tweets.filter(tweet => tweet.user.username === user);
        let formatTweet = []
        last.forEach(tweet => {
            formatTweet.push({
                username: tweet.user.username,
                avatar: tweet.user.avatar,
                tweet: tweet.tweet
            })
        });
        return formatTweet;
    }

    createTweet(tweet: CreateTweetDTO) {
        const existUser = this.users.findIndex(user => tweet.username === user.username);
        if (existUser !== -1) {
            const newTweet = new Tweet(this.users[existUser], tweet.tweet);
            return this.tweets.push(newTweet);
        } else {
            throw new UnauthorizedException();
        }
    }

    getHello(): string {
        return "I'm okay!";
    }
}