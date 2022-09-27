import React, { useEffect, useRef } from 'react'
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
function ContentArea({ messages, username }) {
  const theme = useTheme();
  const styles = useStyles(theme);
  const scrollRef = useRef(null)

  const handleScroll = () =>{
   scrollRef.current && scrollRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
  }
  useEffect(()=>{
    handleScroll()
  },[messages])
  return (
    <Box sx={styles.root}>
      {messages &&
        messages.map((message) =>
          message?.username === username ? (
            <Box sx={{display:"flex",justifyContent:"flex-end" }}>
              {" "}
              <MessageOut text={message.text} username ={message.username} />
            </Box>
          ) : (
            <Box>
              <MessageIn text={message.text} username = {message.username} />
            </Box>
          )
        )}
        <div ref={scrollRef}></div>
    </Box>
  );
}

export default ContentArea