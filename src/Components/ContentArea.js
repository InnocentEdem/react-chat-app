import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
const useStyles = ()=>(
    {
        root:{
            border:"solid #5d3fd3",
            borderRadius:"10px 10px 0 0 ",
            height:"100%"
        }
    }
)
function ContentArea() {
    const theme = useTheme()
    const styles = useStyles(theme)
  return (
    <Box sx={styles.root}>

    </Box>
  )
}

export default ContentArea