import { Model } from '../model';

export interface ITeamModel {
    id: string;
    name: string;
}

export class TeamModel extends Model implements ITeamModel {
    public id: string;
    public name: string;

    constructor(data: ITeamModel) {
        super();

        this.id = data.id;
        this.name = data.name;
    }
}
