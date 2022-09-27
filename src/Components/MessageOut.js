import { Avatar, Box } from '@mui/material';
import React from 'react'
import classes from './message.module.css'

function MessageOut({text}) {
  return (
    <Box sx={{margin:"1rem",color:"#fff"}}>
    <Box sx={{display:"flex"}}>
    <div style={{position:"relative"}}>
      <div className={`${classes.talk_bubble} ${classes.triangle} ${classes.right_top}`}>
        <div className={classes.talktext}>
          <p>{text}</p>
        </div>
      </div>
    </div>
    <Box sx={{width:"10%"}}>
      <Avatar sx={{width:"5rem", height:"5rem"}}/>
    </Box>
    </Box>
    </Box>

  );
}

export default MessageOut