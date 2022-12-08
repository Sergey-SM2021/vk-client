import {Stack} from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

interface IComment {
    count: number
}

export const Comments = ({count}: IComment) => {
    return <Stack gap={({spacing}) => (spacing())} direction={"row"} alignItems={'center'}>
        <ChatBubbleOutlineIcon/>
        {count}
    </Stack>
}