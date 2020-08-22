import { ITeamModel, TeamModel } from './team-model';
import { Collection } from '../collection';

export class TeamCollection extends Collection<ITeamModel, TeamModel> {
    protected createModel(data: ITeamModel): TeamModel {
        return new TeamModel(data);
    }
}
