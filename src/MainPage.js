import React from 'react'
import { Container } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addNewMessage } from './appStore/actions'

const useStyles = (theme)=>(
  {
    root:{
      height:"100vh"
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
      MainPage
    </Container>
  )
}

export default MainPage