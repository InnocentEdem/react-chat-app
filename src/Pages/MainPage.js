import React from 'react'
import { Container, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useSelector, useDispatch } from 'react-redux'
import { addNewMessage } from '../appStore/actions'
import MessageInput from '../Components/MessageInput'
import ContentArea from '../Components/ContentArea'

const useStyles = (theme)=>(
  {
    root:{
      height:"100vh",
      diplay:"flex",
      alignItems:"center",
    },
    displayMessages:{
      height:"80vh",
      backgorunColor:"brown"
    },
    messageInput:{
      height:"2 ;sjdklajkljdjkdfj0vh",
      minHeight:"2rem",
      display:"flex",
      backgroundColor:"#5d3fd3",  
      borderRadius:" 0 0 10px 10px"
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
  const theme = useTheme
  const styles = useStyles(theme)
  // const dispatch = useDispatch()
  // dispatch(addNewMessage({message:"hello"}))
  return (
    <Container maxWidth='md' sx={styles.root}>
      <Box sx={styles.mainContainer}>
      <Box sx={styles.displayMessages}>
        <ContentArea/>
      </Box>
      <Box sx={styles.messageInput}>
        <Box sx={{margin:"auto",width:"100%"}}>
        <MessageInput/>
        </Box>
      </Box>
      </Box>

    </Container>
  )
}

export default MainPage