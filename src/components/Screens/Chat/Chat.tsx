import { useRouter } from "next/router"
import {
  alpha,
  AppBar,
  Avatar,
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Paper,
  Stack,
  Toolbar,
  Typography
} from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import MoreIcon from "@mui/icons-material/MoreVert"
import { IMessage } from "types/Message"
import { MessageItem } from "./MessageItem"

export interface IChatPage {
  messages: Array<IMessage>
}

export const ChatPage = ({ messages }: IChatPage) => {
  const router = useRouter()
  const handlerBack = () => {
    router.back()
  }
  return (<Paper sx={({palette})=>({ width: "100%", height: "91vh", overflow: "auto", position: "relative", background:alpha(palette.common.black,0.15) })}>
    <AppBar sx={{ position: "sticky", top: 0, height: "auto" }}>
      <Toolbar>
        <Stack alignItems={"center"} justifyContent={"space-between"} sx={{ width: "100%" }} direction={"row"}>
          <Stack alignItems={"center"} direction={"row"} gap={({ spacing }) => (spacing())}
                 onClick={handlerBack}>
            <ArrowBackIcon />
            <Box>Назад</Box>
          </Stack>
          <Typography variant={"h6"}>Sergey kuznetsov</Typography>
          <Stack direction={"row"} alignItems={"center"}>
            <IconButton sx={{ color: "#fff" }}>
              <MoreIcon sx={{ transform: "rotate(90deg)" }} />
            </IconButton>
            <Avatar />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
    <Stack direction={"column"} sx={({spacing})=>({gap:spacing(3),padding:`${spacing()} ${spacing(10)} 0 ${spacing(10)}`})}>
      {router.isFallback ? <CircularProgress /> : messages.map(message => <MessageItem id={message.id} text={message.text} />)}
    </Stack>
  </Paper>)
}