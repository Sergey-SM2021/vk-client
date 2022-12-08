import { ChatPage, IChatPage } from "components/Screens/Chat/Chat"
import { GetStaticProps } from "next"
import man from "assets/man.png"

const Chat = ({ messages }: IChatPage) => {
  return <ChatPage messages={messages} />
}
export default Chat

export const getStaticProps: GetStaticProps<IChatPage> = async () => {
  return ({
    props: {
      messages: [
        {
          id: "myId",
          text: "Привет",
          userSender: { id: Math.random().toString(), name: "Алек", status: "В активном поиске", ava: man, posts: [] }
        },
        {
          id: Math.random().toString(),
          text: "Привет",
          userSender: { id: Math.random().toString(), name: "Алек", status: "В активном поиске", ava: man, posts: [] }
        }
      ]
    }
  })
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}