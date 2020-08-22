import { Model } from '../model';

export interface IUserModel {
    id: string;
    email: string;
    avatar: string;
    username: string;
    level: number;
    teamId: string;
    progress: number;
    roles: UserRoles[];
    workPosition: UserWorkPosition;
}

export enum UserRoles {
    user = 'ROLE_USER',
    admin = 'ROLE_ADMIN'
}

export enum UserWorkPosition {
    TeamLead = 'TeamLead',
    Manager = 'Manager',
    Developer = 'Developer',
    Tester = 'Tester'
}

export class UserModel extends Model implements IUserModel {
    public id: string;
    public email: string;
    public level: number;
    public avatar: string;
    public username: string;
    public teamId: string;
    public progress: number;
    public roles: UserRoles[];
    public workPosition: UserWorkPosition;

    constructor(data: IUserModel) {
        super();

        this.id = data.id;
        this.roles = data.roles;
        this.email = data.email;
        this.level = data.level;
        this.avatar = data.avatar;
        this.teamId = data.teamId;
        this.progress = data.progress;
        this.username = data.username;
        this.workPosition = data.workPosition;
    }

    public get isAdmin(): boolean {
        return this.roles.some((role: UserRoles) => role === UserRoles.admin);
    }

    public get workPositionDesc(): string {
        switch (this.workPosition) {
            case UserWorkPosition.Developer:
                return `Разработчик`;
            case UserWorkPosition.Manager:
                return `Менеджер`;
            case UserWorkPosition.TeamLead:
                return `Тимлид`;
            case UserWorkPosition.Tester:
                return `Тестировщик`;
            default:
                return `Черт знает кто`;
        }
    }
}
