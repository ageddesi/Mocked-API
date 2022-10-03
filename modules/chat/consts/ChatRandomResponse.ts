import User from "../../users/consts/User"
import ChatMessage from "./ChatMessage"

type ChatRandomResponse = {
  users: User[]
  messages: ChatMessage[],
}

export default ChatRandomResponse
