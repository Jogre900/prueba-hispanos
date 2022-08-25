import { Alert, AlertTitle, Box, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

const MuiAlert = () => {
  return (
    <Box>
      <Typography variant='h4' sx={{ margin: '2rem 0' }}>
        Mui Alert example
      </Typography>
      <Alert
        severity='success'
        variant='filled'
        icon={<CheckCircle />}
        onClose={() => {}}
      >
        <AlertTitle>Success</AlertTitle>
        This is a success message
      </Alert>
      <Alert severity='info' variant='filled'>
        This is a info message
      </Alert>
      <Alert severity='warning' variant='contained'>
        This is a warning message
      </Alert>
      <Alert severity='error' variant='outlined'>
        This is a error message
      </Alert>
    </Box>
  )
}

export default MuiAlert
