import { useState } from 'react'
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material'
const MuiRadioGroup = () => {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <Box width='350px'>
      <FormControl error>
        <FormLabel id='years-experience-form'>Years of Experience</FormLabel>
        <RadioGroup
          name='years-experience'
          aria-labelledby='years-experience-form'
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio />} label='0-2' value='0-2' />
          <FormControlLabel control={<Radio />} label='2-6' value='2-6' />
          <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
        </RadioGroup>
        <FormHelperText>Invalid value.</FormHelperText>
      </FormControl>
    </Box>
  )
}

export default MuiRadioGroup
