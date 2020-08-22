import { Collection } from '../collection';
import { IMessageModel, MessageModel } from './message-model';

export class MessageCollection extends Collection<IMessageModel, MessageModel> {
    protected createModel(data: IMessageModel): MessageModel {
        return new MessageModel(data);
    }
}
