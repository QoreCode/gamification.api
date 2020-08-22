import { ITeamModel, TeamModel } from './team-model';
import { Mapper } from '../mapper';
import { Collection } from '../collection';
import { TeamCollection } from './team-collection';

export class TeamMapper extends Mapper<ITeamModel, TeamModel> {
    protected entity: string = 'team';

    protected createCollection(data: ITeamModel[]): Collection<ITeamModel, TeamModel> {
        const collection = new TeamCollection();
        collection.setEntities(data);

        return collection;
    }

    protected createModel(data: ITeamModel): ITeamModel {
        return new TeamModel(data);
    }
}
