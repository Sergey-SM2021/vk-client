import { Paper } from "@mui/material"

interface IMessageItem {
  text: string,
  id: string
}

export const MessageItem = ({ text, id }: IMessageItem) => {
  return (<Paper sx={({spacing}) => ({padding:spacing(), margin: id === "myId" ? "0 150px 0 0" : "0 0 0 150px" })}>{text}</Paper>)
}