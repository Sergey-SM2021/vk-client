import {alpha, AppBar, Avatar, Box, Container, InputBase, Toolbar, Typography} from "@mui/material"
import {styled} from "@mui/material/styles"
import SearchIcon from "@mui/icons-material/Search"
import Image from "next/image";
import Link from "next/link";

const IconWrapper = styled("div")(({theme}) => ({
    position: "absolute",
    top: "50%",
    left: 5,
    transform: "translateY(-50%)"
}))

const SearchWrapper = styled("div")(({theme}) => ({
    position: "relative",
    marginLeft: theme.spacing(12),
    background: alpha(theme.palette.common.white, .20),
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create("background"),
    "&:hover": {
        background: alpha(theme.palette.common.white, .25)
    }
}))

const Input = styled(InputBase)(({theme}) => ({
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(1),
    color: theme.palette.common.white,
    "& .MuiInputBase-input": {
        transition: theme.transitions.create("width"),
        width: 150,
        "&:focus": {
            width: 200
        }
    }
}))

interface IHeader {
    avatar: string
}

export const Header = ({avatar}: IHeader) => {
    return <AppBar>
        <Container>
            <Toolbar>
                <Link href={"/"} style={{textDecoration: "none"}}>
                    <Typography variant={"h6"} sx={(theme) => ({
                        fontWeight: 600,
                        color: theme.palette.common.white
                    })}>VKCOPY</Typography>
                </Link>
                <SearchWrapper>
                    <Input placeholder="Search…"/>
                    <IconWrapper>
                        <SearchIcon/>
                    </IconWrapper>
                </SearchWrapper>
                <Box flexGrow={1}></Box>
                <Link href={"user/90"}>
                    <Avatar>
                        <Image width={45} height={45} src={avatar}/>
                    </Avatar>
                </Link>
            </Toolbar>
        </Container>
    </AppBar>
}