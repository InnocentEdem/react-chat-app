import { Box, Button, Card, FormControl,OutlinedInput, Typography } from '@mui/material'
import React, { useState } from 'react'
import {useNavigate } from "react-router-dom";


function LogUserIntoChat() {
    const [ username, setUsername] = useState()
    const navigate = useNavigate()



    const handleChange = (e) =>{
        setUsername(e.target.value)
    }

    const handleClickOkay = () =>{
        if(username){
            navigate(`chat/?username=${username}`)
        }
    }

  return (
    <Box sx={{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#ae9fe9"}}>
        <Card sx={{width:"30rem",height:"10rem",display:"flex",flexDirection:"column",p:8}}>
            <Box sx={{mb:2}}>
                <Typography variant="h5"> Enter Username</Typography>
               
                </Box>
            <FormControl>
                <OutlinedInput
                fullWidth
                onChange = {handleChange}
                value = {username}
                />  
            </FormControl>
            <Button variant='contained' sx={{width:"6rem", alignSelf:"end", mt:4}} onClick = {handleClickOkay}>
                <Typography variant = 'h6'>
                    Okay
                </Typography>
            </Button>
        </Card>
    </Box>
  )
}

export default LogUserIntoChat