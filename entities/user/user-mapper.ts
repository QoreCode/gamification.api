import { IUserModel, UserModel } from './user-model';
import { Mapper } from '../mapper';
import { Collection } from '../collection';
import { UserCollection } from './user-collection';

export class UserMapper extends Mapper<IUserModel, UserModel> {
    protected entity: string = 'users';

    // public async auth(email: string, password: string) {
    //     const data = await this.request.post(this.entity, {email, password});
    //
    //     return this.createModel(data);
    // }

    // public async login() {
    //     const data = await this.request.post(this.entity, payload);
    //
    //     return this.createModel(data);
    // }

    protected createCollection(data: IUserModel[]): Collection<IUserModel, UserModel> {
        const collection = new UserCollection();
        collection.setEntities(data);

        return collection;
    }

    protected createModel(data: IUserModel): UserModel {
        return new UserModel(data);
    }
}
