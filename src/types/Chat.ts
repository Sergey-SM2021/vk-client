import { IMessage } from "../components/Screens/Messages/Messages"

export interface IChat{
  id:string
  messages:Array<IMessage>
}