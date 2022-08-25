import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material'
import Send from '@mui/icons-material/Send'
import { FormatBold, FormatItalic, FormatUnderlined } from '@mui/icons-material'
import { useState } from 'react'

const ButtonsGroup = () => {
  const [toggleValue, setToggleValue] = useState([])
  console.log({ toggleValue })
  const handleToggleChange = (e, newValue) => {
    setToggleValue(newValue)
  }

  return (
    <>
      <h1>List of buttons</h1>

      <Stack spacing={3}>
        <Stack spacing={2} direction='row'>
          <Button variant='contained' color='primary'>
            Primary contained
          </Button>
          <Button variant='outlined'>outlined</Button>
          <Button variant='text'>text</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
          <Button variant='contained' color='secondary'>
            secondary
          </Button>
          <Button variant='contained' color='warning'>
            warning
          </Button>
          <Button variant='contained' color='info'>
            info
          </Button>
          <Button variant='contained' color='success'>
            success
          </Button>
          <Button variant='contained' color='error'>
            error
          </Button>
        </Stack>

        <Stack spacing={2} direction='row'>
          <Button variant='contained' color='primary' size='small'>
            small
          </Button>
          <Button variant='contained' color='primary' size='medium'>
            medium
          </Button>
          <Button variant='contained' color='primary' size='large'>
            large
          </Button>
        </Stack>

        <Stack spacing={2} direction='row'>
          <IconButton aria-label='send-btn' color='secondary' size='small'>
            <Send />
          </IconButton>
        </Stack>

        <Stack>
          <ButtonGroup variant='text' color='secondary' aria-label='btn-group'>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Stack>

        <Stack>
          <ToggleButtonGroup
            aria-label='toggle-btn'
            size='small'
            color='success'
            value={toggleValue}
            onChange={(e, newValue) => handleToggleChange(e, newValue)}
          >
            <ToggleButton value='left' aria-label='left aligned'>
              <FormatBold />
            </ToggleButton>
            <ToggleButton value='center' aria-label='centered'>
              <FormatItalic />
            </ToggleButton>
            <ToggleButton value='right' aria-label='right aligned'>
              <FormatUnderlined />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </>
  )
}

export default ButtonsGroup
