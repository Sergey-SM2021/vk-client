import {styled} from "@mui/material/styles";
import {Avatar, Box, Button, Paper, Stack, Typography} from "@mui/material";
import Image from "next/image";

const HeaderContainer = styled("div")(({theme}) => ({
    borderRadius: theme.shape.borderRadius,
    background: "linear-gradient(90deg,#e66465, #9198e5)",
    height: "35vh",
}))

const HeaderContent = styled(Paper)(({theme}) => ({
    width: "100%",
    height: "30%",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(3),
    display: "flex",
    gap: theme.spacing()
}))

const AvatarWrapper = styled("div")(({theme}) => ({
    position: "relative",
    width: 150,
    height: "100%",
}))

interface IHeader {
    ava: string,
    name: string,
    status: string
}

export const Header = ({ava, status, name}: IHeader) => {
    return <HeaderContainer>
        <Stack direction={"row"} alignItems={"flex-end"} height={"100%"}>
            <HeaderContent>
                <AvatarWrapper>
                    <Avatar sx={{width: 150, height: 150, position: 'absolute', bottom: 50, left: 0, right: 0}}>
                        <Image src={ava} alt={""} width={150} height={150}/>
                    </Avatar>
                </AvatarWrapper>
                <Stack flex={1}>
                    <Typography variant={'h4'}>{name}</Typography>
                    <Typography>{status}</Typography>
                </Stack>
                <Button sx={{alignSelf:"start"}}>Редактировать профиль</Button>
            </HeaderContent>
        </Stack>
    </HeaderContainer>
}