import {FriendsPage} from "../src/components/Screens/Friends/Friends";
import {IUser} from "../src/types/User";
import {IPost} from "../src/types/Post";
import ava from "../src/assets/man.png";
import picture from "../src/assets/Снимок экрана от 2022-12-01 23-11-22.png";
import ava2 from "../src/assets/princess.png";

const posts: Array<IPost> = [{
    poster: {name: "Сергей Кузнецов", ava: ava, id: ""},
    textNews: "Спасибо за лето!!!!!",
    media: [picture],
    likes: 42,
    comments: [{
        user: {
            id: Math.random().toString(),
            name: "Маша",
            ava: ava2
        },
        id: Math.random().toString(),
        message: "И тебе!"
    }],
    id: Math.random()
}]

const user1: IUser = {
    ava: ava, status: "Я бальник", name: "Sergi", id: Math.random().toString(), posts,
}

const friends:Array<IUser> = [user1,user1,user1]

const Friends = () => {
    return <FriendsPage friends={friends}/>
}

export default Friends