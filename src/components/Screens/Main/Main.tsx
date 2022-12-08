import {Box, Stack} from "@mui/material"
import {Aside} from "../../Layouts/Asidebar"
import {Post} from "./Post";
import {IPost} from "../../../types/Post";

export interface IMainPage{
    posts:Array<IPost>
}

export const MainPage = ({posts}:IMainPage) => {
    return <Stack direction={"row"} sx={(theme) => ({minHeight: "100vh", flex: 1, gap: theme.spacing(1)})}>
        <Box sx={{flexGrow: 1}}>
            {posts.map(post => <Post key={post.id} {...post}/>)}
        </Box>
        <Aside/>
    </Stack>
}