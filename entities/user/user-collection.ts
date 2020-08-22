import { Collection } from '../collection';
import { IUserModel, UserModel } from './user-model';

export class UserCollection extends Collection<IUserModel, UserModel> {
    protected createModel(data: IUserModel): UserModel {
        return new UserModel(data);
    }
}
