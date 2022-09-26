import React from 'react'
import { Container } from '@mui/material'
import { useTheme } from '@mui/material/styles'

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
  return (
    <Container maxWidth='md' sx={styles.root}>
      MainPage
    </Container>
  )
}

export default MainPage