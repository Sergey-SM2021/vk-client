import {IUser} from "./User";

export interface IComment {
    user: IUser,
    media?: Array<string>,
    message?: string
    id: string
}
