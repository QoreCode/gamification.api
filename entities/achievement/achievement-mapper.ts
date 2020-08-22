import { AchievementModel, IAchievementModel } from './achievement-model';
import { Mapper } from '../mapper';
import { Collection } from '../collection';
import { AchievementCollection } from './achievement-collection';

export class AchievementMapper extends Mapper<IAchievementModel, AchievementModel> {
    protected entity: string = 'achievement';

    protected createCollection(data: IAchievementModel[]): Collection<IAchievementModel, AchievementModel> {
        const collection = new AchievementCollection();
        collection.setEntities(data);

        return collection;
    }

    protected createModel(data: IAchievementModel): AchievementModel {
        return new AchievementModel(data);
    }
}
