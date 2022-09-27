import { useDispatch,useSelector } from 'react-redux'
import { addNewMessage,addNewUser } from '../../appStore/actions'

function useSendMessage() {
    const dispatch = useDispatch()
    const timeNow = new Date().toISOString()
    const messages = useSelector(state=>state.chat.messages)
    const users = useSelector(state=>state.chat.users)
    console.log(users,"users");

    const send = ({username,text})=>{
        dispatch(addNewMessage({text,timeSent:timeNow,username}))

    }
    const addUser = (username)=>{
        dispatch(addNewUser(username))
    }
    const hasUsername = (username) =>{
        console.log(username);
        return users.includes(username)
    }
    const getMessages = (limit)=>{
        return messages? messages.slice(0,limit+1) : []
    }

    return {send,messages,users,hasUsername,addUser, getMessages}


}

export default useSendMessage