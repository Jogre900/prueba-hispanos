import { useState, forwardRef } from 'react'
import { Box, Button, Snackbar, Alert, Typography } from '@mui/material'

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />
})

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false)

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return
    }
    return setOpen(false)
  }

  return (
    <Box>
      <Typography variant='h4'>MuiSnackbar example</Typography>
      <Button onClick={setOpen(true)}>open snackbar</Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={4000}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <SnackbarAlert severity='error' />
      </Snackbar>
    </Box>
  )
}

export default MuiSnackbar
