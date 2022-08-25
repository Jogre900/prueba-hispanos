import { useState } from 'react'
import { Box, Stack, Typography, Autocomplete, TextField } from '@mui/material'

const languages = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'Ruby']

const skillsArray = languages.map((language, i) => ({
  id: i + 1,
  label: language
}))

const MuiAutoComplete = () => {
  const [value, setValue] = useState(null)
  const [skills, setSkills] = useState(null)
  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  const handleSkillsChange = (e, newValue) => {
    setSkills(newValue)
  }

  console.log({ value })
  console.log({ skills })

  return (
    <Box sx={{ margin: '2rem 0' }}>
      <Typography variant="h4">MuiAutoComplete</Typography>
      <Stack width="250px" spacing={2}>
        <Autocomplete
          name="languages"
          aria-label="languages"
          options={languages}
          renderInput={(params) => (
            <TextField {...params} label="Search for a language" />
          )}
          value={value}
          onChange={handleChange}
          freeSolo
        />

        <Autocomplete
          aria-label="skills"
          options={skillsArray}
          renderInput={(params) => (
            <TextField {...params} label="Search for a skill" />
          )}
          getOptionLabel={(option) => option.label}
          value={skills}
          onChange={handleSkillsChange}
        />
      </Stack>
    </Box>
  )
}

export default MuiAutoComplete
