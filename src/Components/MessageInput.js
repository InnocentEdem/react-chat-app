import { Box, FormControl, OutlinedInput} from '@mui/material'
import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import SendIcon from '@mui/icons-material/Send';

const useStyles = (theme)=>(
    {
        root:{
            height:"100%",
            display:"flex",
            margin:"1rem",
            zIndex:100
        },
        input:{
            width:"80%",
        },
        send:{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"20%",
        }
    }
)

function MessageInput({handleSend}) {
    const theme = useTheme()
    const styles = useStyles(theme)
    const [message,setMessage] = useState()

    const handleChange = (e)=>{
        setMessage(e.target.value)
    }
    const handleClickSend = ()=>{
        if(message){
            handleSend(message)
            setMessage("")
        }
    }

  return (
    <Box sx={styles.root}>
        <FormControl sx={styles.input}>
            <OutlinedInput
                multiline
                maxRows={3}
                sx={{backgroundColor:"#efecfb"}}
                value = {message}
                onChange = {handleChange}
            
            />
        </FormControl>
        <Box sx={styles.send}>
            <SendIcon sx={{fontSize:"2rem",color:"#dfd9f6", cursor:"pointer"}} onClick = {handleClickSend}/>
        </Box>
    </Box>
  )
}

export default MessageInput