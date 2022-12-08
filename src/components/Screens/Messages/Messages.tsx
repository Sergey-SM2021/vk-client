import {Avatar, Link, Paper, Stack, Typography} from "@mui/material";
import { IChat } from "../../../types/Chat"

interface IMessagePage{
    chats:Array<IChat>
}

export const MessagesPage = ({chats}:IMessagePage) => {
    return <Paper sx={({spacing}) => ({padding: spacing(), height: "min-content", width: "100%"})}>
        <Link style={{textDecoration:"none"}} href={"chat/0"}>
            <Stack direction={"row"} gap={(theme) => (theme.spacing())}>
                <Avatar sx={{width: 60, height: 60}}/>
                <Stack>
                    <Typography variant={"h6"}>Sergei Kuznetsov</Typography>
                    <Stack direction={"row"} gap={(theme) => (theme.spacing())}>
                        <Avatar sx={{width: 25, height: 25}}/>
                        <Typography>Привет, сладкая</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Link>
    </Paper>
}