import {Stack} from "@mui/material";
import {Header} from "./Header";
import {Post} from "../Main/Post";
import {Aside} from "../../Layouts/Asidebar";
import {IUser} from "../../../types/User";
import {AddPost} from "./AddPost";

interface IProfilePage {
    user: IUser
}

export const ProfilePage = ({user}: IProfilePage) => {
    const {ava, status, name, id, posts} = user
    return <Stack gap={({spacing}) => (spacing())} sx={{flex: 1}}>
        <Header ava={ava} name={name} status={status}/>
        <Stack gap={({spacing}) => spacing()} direction={"row"}>
            <Stack gap={({spacing}) => (spacing())}>
                <AddPost avatar={user.ava}/>
                {posts.map(post => <Post key={post.id} {...post}/>)}
            </Stack>
            <Aside/>
        </Stack>
    </Stack>
}