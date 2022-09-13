import type { User } from "./user";
import { Post } from "./post.model";
import {Chat} from "./chat.model";
// import { Photo } from "./photo.model";

export class Message {
    // fields
    message: string;
    sender: User;
    chatId: number;
    // // chat: Chat;
    // person: User;

    // constructor
    constructor(message:string, sender:User, chatId:number) {
        this.message = message;
        this.sender = sender;
        this.chatId = chatId;
        // this.chat = 
    }

    // functions

}