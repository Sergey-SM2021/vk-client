import {Avatar, Paper, Stack, Typography} from "@mui/material";
import {IPost} from "../../../types/Post";
import Image from "next/image";
import {Likes} from "./Likes";
import {Comments} from "./Comments";

export const Post = ({likes, media, poster, textNews, comments}: IPost) => {
    return <Paper sx={(theme) => ({padding: theme.spacing(),maxWidth:"100%"})}>
        <Stack gap={({spacing}) => (spacing())}>
            <Stack direction={"row"} alignItems={"center"} gap={({spacing}) => spacing()}>
                <Avatar>
                    <Image src={poster.ava} width={45} height={45}/>
                </Avatar>
                <Typography variant={"h6"} fontWeight={"500"}>{poster.name}</Typography>
            </Stack>
            <Typography>{textNews}</Typography>
            <Image src={media[0]}/>
            <Stack direction={"row"} gap={({spacing}) => spacing(2)}>
                <Likes count={likes}/>
                <Comments count={comments.length}/>
            </Stack>
        </Stack>
    </Paper>
}