import {Avatar, Box, Button, Paper, Stack} from "@mui/material";
import Image from "next/image";
import {TextArea} from "../../Ui/TextArea";

interface IAddPost {
    avatar: string
}

export const AddPost = ({avatar}: IAddPost) => {
    return <Paper sx={({spacing}) => ({padding: spacing()})}>
        <Stack direction={"row"} gap={({spacing}) => (spacing())}>
            <Avatar src={avatar}>
                <Image src={avatar} width={45} height={45}/>
            </Avatar>
            <Box sx={({spacing}) => ({paddingY: spacing(1)})} width={"100%"}>
                <TextArea placeholder={"Что у вас нового?"}/>
            </Box>
        </Stack>
        <Stack direction={"row"} justifyContent={"flex-end"}>
            <Button variant={"contained"}>Опубликовать</Button>
        </Stack>
    </Paper>
}