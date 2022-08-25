import { useState } from 'react'
import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  FormControlLabel,
  Switch
} from '@mui/material'

const MuiSwitch = () => {
  const [value, setValue] = useState(false)
  const [valueTwo, setValueTwo] = useState(false)
  return (
    <Box
      sx={{
        margin: '2rem 0'
      }}
    >
      <Typography variant="h4">MuiSwitch</Typography>
      <FormControl aria-label="switch group">
        <FormLabel>Switch Group</FormLabel>
        <Box display="flex">
          <FormControlLabel
            label="dark mode"
            control={
              <Switch
                checked={value}
                onChange={(e) => setValue(e.target.checked)}
                color="error"
                size="small"
              />
            }
          />
          <FormControlLabel
            label="light mode"
            control={
              <Switch
                checked={valueTwo}
                onChange={(e) => setValueTwo(e.target.checked)}
                color="success"
              />
            }
          />
        </Box>
      </FormControl>
    </Box>
  )
}

export default MuiSwitch
