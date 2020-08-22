import { Model } from '../model';

export enum MessageCategories {
    message = 'message',
    achievement = 'achievement',
    administrative = 'administrative'
}

export interface IMessageModel {
    id: string;
    text: string;
    userId: string;
    category: MessageCategories;
    authorId?: string;
    achievementId?: string;
}

export class MessageModel extends Model implements IMessageModel {
    public id: string;
    public text: string;
    public userId: string;
    public category: MessageCategories;
    public authorId?: string;
    public achievementId?: string;

    constructor(data: IMessageModel) {
        super();

        this.id = data.id;
        this.text = data.text;
        this.userId = data.userId;
        this.category = data.category;
        this.authorId = data.authorId;
        this.achievementId = data.achievementId;
    }
}
