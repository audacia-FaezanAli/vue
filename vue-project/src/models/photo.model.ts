import { User } from "./user";
import { Post } from "./post.model";
import {Chat} from "./chat.model";
import { Message } from "./message.model";

export class Photo {
    // fields
    dateUploaded: Date;
    url: string;
    userId: number;
    postId: number;
    chat: Chat;
    user: User;

    // constructor
    constructor() {
        
    }

    // functions

}