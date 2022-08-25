import { TextField, Stack, Box, MenuItem } from '@mui/material'
import { useState } from 'react'

const COUNTRIES = [
  {
    value: 'US',
    label: 'United States',
  },
  {
    value: 'CA',
    label: 'Canada',
  },
  {
    value: 'MX',
    label: 'Mexico',
  },
]

const MuiTextfield = () => {
  const [countriesSelected, setCountriesSelected] = useState([])

  const handleChange = (e) => {
    const { value } = e.target
    setCountriesSelected(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <Stack spacing={3}>
      <h1>TextField Examples</h1>
      <Stack spacing={2} direction='row'>
        <TextField variant='filled' label='name' />
        <TextField variant='outlined' label='name' />
        <TextField variant='standard' label='name' />
      </Stack>
      <Stack spacing={2} direction='row'>
        <Box width='250px'>
          <TextField
            select
            fullWidth
            label='Country'
            variant='outlined'
            value={countriesSelected}
            onChange={handleChange}
            SelectProps={{
              multiple: true,
            }}
          >
            {COUNTRIES.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Stack>
    </Stack>
  )
}

export default MuiTextfield
