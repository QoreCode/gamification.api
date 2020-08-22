import { Collection } from '../collection';
import { AchievementModel, IAchievementModel } from './achievement-model';

export class AchievementCollection extends Collection<IAchievementModel, AchievementModel> {
    protected createModel(data: IAchievementModel): AchievementModel {
        return new AchievementModel(data);
    }
}
