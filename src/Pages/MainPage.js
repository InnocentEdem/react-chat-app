import React, { useEffect, useState } from 'react'
import { Container, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useSelector, useDispatch } from 'react-redux'
import { addNewMessage } from '../appStore/actions'
import MessageInput from '../Components/MessageInput'
import ContentArea from '../Components/ContentArea'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import useSendMessage from '../utils/hooks/useSendMessage'

const useStyles = (theme)=>(
  {
    root:{
      height:"100vh",
      diplay:"flex",
      alignItems:"center",
      position:"fixed"
    },
    displayMessages:{
      height:"80vh",
    },
    messageInput:{
      height:"20vh",
      minHeight:"2rem",
      display:"flex",
      backgroundColor:"#5d3fd3",  
      borderRadius:" 0 0 10px 10px",
      zIndex:"100"
    },
    mainContainer:{
      display:"flex",
      height:"100%",
      justifyContent:"center",
      flexDirection:"column",
      justifyItems:"center",
    }
  }
)

function MainPage() {
  const [messageLimit, setMessageLimit] = useState(25)
  const [slicedMessages, setSlicedMessages] = useState([])
  const theme = useTheme()
  const styles = useStyles(theme)
  const navigate = useNavigate()
  const {send,messages,users,hasUsername,addUser,getMessages} = useSendMessage()

  const [searchParams] = useSearchParams();
  const username = searchParams.get("username")
  
  if(!username){
    navigate('/')
  }


  const handleFetchMore = ()=>{
    setMessageLimit(prev => prev += 25)
  }
  const handleSend = (text) =>{
    send({username,text})
  }
  
  useEffect(()=>{
    setSlicedMessages(getMessages(messageLimit))

  },[messageLimit])

  useEffect(()=>{
    setSlicedMessages(getMessages(messageLimit))

  },[])

  return (
    <Box sx={{minWidth:"320px"}} >
    <Container maxWidth='md' >
      <Box sx={styles.mainContainer}>
      <Box sx={styles.displayMessages}>
        <ContentArea/>
      </Box>
      <Box sx={styles.messageInput}>
        <Box sx={{margin:"auto",width:"100%"}}>
        <MessageInput handleSend ={ handleSend}/>
        </Box>
      </Box>
      </Box>

    </Container>
    </Box>
  )
}

export default MainPage