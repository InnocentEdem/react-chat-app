import { Box, FormControl, OutlinedInput} from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles'
import SendIcon from '@mui/icons-material/Send';

const useStyles = (theme)=>(
    {
        root:{
            height:"100%",
            display:"flex",
            margin:"1rem"
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

function MessageInput() {
    const theme = useTheme()
    const styles = useStyles(theme)
  return (
    <Box sx={styles.root}>
        <FormControl sx={styles.input}>
            <OutlinedInput
                multiline
                maxRows={3}
                sx={{backgroundColor:"#efecfb"}}
            
            />
        </FormControl>
        <Box sx={styles.send}>
            <SendIcon sx={{fontSize:"2rem",color:"#dfd9f6", cursor:"pointer"}}/>
        </Box>
    </Box>
  )
}

export default MessageInput