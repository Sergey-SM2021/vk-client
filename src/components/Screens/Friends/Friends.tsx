import {
    Avatar,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, IconButton,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import {IUser} from "../../../types/User";
import Image from "next/image";
import Link from "next/link";
import {MouseEvent, useState} from "react";
import {TextArea} from "../../Ui/TextArea";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";

interface IFriendsPage {
    friends: Array<IUser>
}

interface IModal {
    handlerClose: () => void,
    isOpen: boolean
}

export const Modal = ({isOpen, handlerClose}: IModal) => {
    return (<Dialog open={isOpen} onClose={handlerClose}>
        <DialogTitle>
            <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography variant={"subtitle1"}>Новое сообщение</Typography>
                <Link href={"/chat/9"} style={{textDecoration:"none",color:"inherit"}}>
                    <Typography sx={{paddingRight: 3}}>Перейти к диалогу с Олей</Typography>
                </Link>
                <IconButton onClick={handlerClose} sx={{position: "absolute", top: 2, right: 2}}>
                    <CloseIcon></CloseIcon>
                </IconButton>
            </Stack>
        </DialogTitle>
        <DialogContent sx={{width: "min-content"}}>
            <TextArea sx={{minWidth: 500}} placeholder={"Напиши сообщение..."}/>
        </DialogContent>
        <DialogActions>
            <Button variant={"contained"}>Отправить</Button>
        </DialogActions>
    </Dialog>)
}

export const FriendsPage = ({friends}: IFriendsPage) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handlerClose = () => {
        setIsModalOpen(false)
    }
    const handlerSendMess = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsModalOpen(true)
    }
    return <Stack gap={1} direction={"column"} width={"100%"}>
        <Modal handlerClose={handlerClose} isOpen={isModalOpen}/>
        {friends.map(friend => <Link key={friend.id} style={{textDecoration: "none"}} href={`user/${friend.id}`}>
            <Paper sx={(theme) => ({padding: theme.spacing()})}>
                <Stack direction={'row'} gap={({spacing}) => (spacing(2))}>
                    <Avatar sx={{width: 75, height: 75}}>
                        <Image src={friend.ava} width={80} height={80}/>
                    </Avatar>
                    <Stack direction={"column"}>
                        <Typography variant={"h6"} component={"p"} sx={{ml: 1}}>{friend.name}</Typography>
                        <Typography sx={{ml: 1}}>{friend.status}</Typography>
                        <Button onClick={handlerSendMess}>Написать</Button>
                    </Stack>
                </Stack>
            </Paper>
        </Link>)}
    </Stack>
}