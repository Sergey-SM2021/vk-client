import {StaticImageData} from "next/image";
import {IUser} from "./User";
import {IComment} from "./Comment";

export interface IPost {
    poster: IUser,
    media: Array<string>,
    comments: Array<IComment>,
    textNews: string,
    likes: number
    // #FIXME: у ID тип string
    id: number
}
