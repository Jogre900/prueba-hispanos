import { useState } from 'react'
import {
  Box,
  Checkbox,
  FormControl,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Typography,
} from '@mui/material'

const MuiCheckBox = () => {
  const [languages, setLanguages] = useState([])
  console.log({ languages })

  const handleChange = (e) => {
    const { value } = e.target
    if (languages.includes(value)) {
      setLanguages(languages.filter((lang) => lang !== value))
    } else {
      setLanguages([...languages, value])
    }
  }

  return (
    <Box>
      <FormControl>
        <FormLabel>
          <Typography variant='body1'>Select a programming language</Typography>
        </FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleChange}
                checked={languages.includes('javascript')}
                size='small'
                color='secondary'
              />
            }
            label='JavaScript'
            value='javascript'
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleChange}
                checked={languages.includes('python')}
              />
            }
            label='Python'
            value='python'
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleChange}
                checked={languages.includes('go')}
              />
            }
            label='Go'
            value='go'
          />
        </FormGroup>
      </FormControl>
    </Box>
  )
}

export default MuiCheckBox
