import ava from "../src/assets/man.png";
import picture from "../src/assets/Снимок экрана от 2022-12-01 23-11-22.png";
import ava2 from "../src/assets/princess.png";
import {IMainPage, MainPage} from "../src/components/Screens/Main/Main";

export default function Main({posts}:IMainPage) {
    return <MainPage posts={posts}/>
}

export async function getStaticProps() {
    return ({
        props: {
            posts: [{
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
        }
    })
}