import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import MessageOut from './MessageOut'
import MessageIn from './MessageIn'
const useStyles = ()=>(
    {
        root:{
            border:"solid #5d3fd3",
            borderRadius:"10px 10px 0 0 ",
            height:"100%",
            padding:"0 2.5rem",
            overflowY:"scroll"
        }
    }
)
function ContentArea() {
    const theme = useTheme()
    const styles = useStyles(theme)
  return (
    <Box sx={styles.root}>
        <MessageOut/>
        <MessageIn/>

    </Box>
  )
}

export default ContentArea