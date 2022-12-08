import {IChat, MessagesPage} from "../src/components/Screens/Messages/Messages";

const chats:Array<IChat> = [{
    messages:[{id:Math.random().toString(),text:"Привет, зайчонок", userSender: {}}],
    id:Math.random().toString()
}]

const Messages = () => {
    return <MessagesPage chats={chats}/>
}

export default Messages