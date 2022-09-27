import { Avatar, Box } from '@mui/material';
import React from 'react'
import classes from './message.module.css'

function MessageIn({text}) {
  return (
    <Box sx={{margin:"1rem"}}>
    <Box sx={{display:"flex"}}>

    <Box sx={{width:"10%",display:"flex",justifyContent:"flex-end"}}>
      <Avatar sx={{width:"5rem", height:"5rem"}}/>
    </Box>
    <div style={{position:"relative"}}>
      <div className={`${classes.talk_bubble2} ${classes.triangle} ${classes.left_top}`}>
        <div className={classes.talktext}>
          <p>{text}</p>
        </div>
      </div>
    </div>
    </Box>
    </Box>

  );
}

export default MessageIn