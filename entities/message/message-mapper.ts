import { IMessageModel, MessageModel } from './message-model';
import { Mapper } from '../mapper';
import { Collection } from '../collection';
import { MessageCollection } from './message-collection';

export class MessageMapper extends Mapper<IMessageModel, MessageModel> {
    protected entity: string = 'message';

    protected createCollection(data: IMessageModel[]): Collection<IMessageModel, MessageModel> {
        const collection = new MessageCollection();
        collection.setEntities(data);

        return collection;
    }

    protected createModel(data: MessageModel): MessageModel {
        return new MessageModel(data);
    }
}
