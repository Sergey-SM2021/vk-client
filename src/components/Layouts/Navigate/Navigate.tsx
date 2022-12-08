import {alpha, Box} from "@mui/material"
import {styled} from "@mui/material/styles";
import {NavigateItems} from "./Navigate.data";
import NextLink from "next/link";

const Link = styled(NextLink)(({theme}) => ({
    textDecoration:"none",
    display: "flex",
    flex: 1,
    padding: "5px 10px",
    justifyContent: "start",
    color: theme.palette.common.black,
    alignItems: "center",
    gap: theme.spacing(),
    '&:hover': {
        transition: theme.transitions.create('background'),
        background: alpha(theme.palette.common.black, .05),
        cursor: "pointer",
        borderRadius: theme.shape.borderRadius
    }
}))

export const Navigate = () => {
    return <Box sx={{height: "100vh", width: 200}}>
        {NavigateItems.map(item => (
            <Link href={item.path} key={item.id}>{item.icon}{item.text}</Link>))}
    </Box>
}