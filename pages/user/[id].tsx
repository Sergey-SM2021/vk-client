import {ProfilePage} from "components/Screens/Profile/Profile";
import {IPost} from "types/Post";
import ava from "assets/man.png";
import picture from "assets/Снимок экрана от 2022-12-01 23-11-22.png";
import ava2 from "assets/princess.png";
import {IUser} from "types/User";

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

const user: IUser = {
    ava: ava, status: "Я бальник", name: "Sergi", id: Math.random().toString(), posts
}

const Profile = () => {
    return <ProfilePage user={user}/>
}

export default Profile