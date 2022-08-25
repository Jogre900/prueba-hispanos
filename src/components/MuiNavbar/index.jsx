import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem
} from '@mui/material'
import { CatchingPokemon } from '@mui/icons-material'

const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  return (
    <AppBar static>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" icon>
          <CatchingPokemon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: '1' }}>
          Pokemon
        </Typography>
        <Stack spacing={2} direction="row">
          <Button color="inherit">Home</Button>
          <Button
            color="inherit"
            id="about-button"
            onClick={(e) => setAnchorEl(e.currentTarget)}
            aria-controls={open ? 'about-menu' : undefined}
            aria-haspopup={open ? 'true' : undefined}
            aria-expanded={open ? 'true' : undefined}
          >
            About
          </Button>
          <Button color="inherit">Contact</Button>
        </Stack>
        <Menu
          id="about-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'about-button'
          }}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <MenuItem>Numbers</MenuItem>
          <MenuItem>Blog</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar
