import { useState } from 'react'
import {
  Box,
  Typography,
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material'
import {
  HomeRounded,
  FavoriteRounded,
  PersonRounded
} from '@mui/icons-material'

const MuiBottomNav = ({ handleNav }) => {
  return (
    <Box>
      {/* {navValue === 1 && <Favorite />} */}
      {/* {navValue === 2 && <Contact />} } */}
      dsadasadadasdsada
      <BottomNavigation
        aria-label="bottom-nav"
        showLabels
        onChange={handleNav}
        sx={{
          position: 'fixed',
          bottom: 0,
          width: '100%'
        }}
      >
        <BottomNavigationAction label="home" icon={<HomeRounded />} />
        <BottomNavigationAction label="favorite" icon={<FavoriteRounded />} />
        <BottomNavigationAction label="contact" icon={<PersonRounded />} />
      </BottomNavigation>
    </Box>
  )
}

export default MuiBottomNav
