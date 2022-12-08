import {Stack, Typography} from "@mui/material";
import LikeIcon from '@mui/icons-material/FavoriteBorder';

interface ILikes {
    count: number
}

export const Likes = ({count}: ILikes) => {
    return <Stack direction={"row"} gap={({spacing}) => (spacing())} alignItems={"center"}>
        <LikeIcon/>
        <Typography>{count}</Typography>
    </Stack>
}