import { Model } from '../model';
import { UserWorkPosition } from '../user/user-model';

export enum Cost {
    bronze = 'bronze',
    silver = 'silver',
    none = 'none',
    gold = 'gold'
}

export enum GoalType {
    code,
    timeLog,
    communication
}

export interface IAchievementModel {
    id: string;
    cost: Cost;
    name: string;
    image: string;
    value: number;
    event: IEvent;
    maxLevel: number;
    goalType: GoalType;
    description: string;
    needForLevel: number;
    workPosition: UserWorkPosition;
}

// need to create Model... maybe
export interface IEvent {
    id: string;
    name: string;
}

export class AchievementModel extends Model implements IAchievementModel {
    public id: string;
    public cost: Cost;
    public name: string;
    public image: string;
    public value: number;
    public event: IEvent;
    public maxLevel: number;
    public goalType: GoalType;
    public description: string;
    public needForLevel: number;
    public workPosition: UserWorkPosition;

    constructor(props: IAchievementModel) {
        super();

        this.id = props.id;
        this.name = props.name;
        this.cost = props.cost;
        this.value = props.value;
        this.image = props.image;
        this.event = props.event;
        this.maxLevel = props.maxLevel;
        this.goalType = props.goalType;
        this.description = props.description;
        this.needForLevel = props.needForLevel;
        this.workPosition = props.workPosition;
    }
}
