import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import MultiTextComponent from '../../components/MultiTextComponent'
import MuiButtonGroup from '../../components/MuiButtonsGroup'
import MuiTextField from '../../components/MuiTextfield'
import MuiRadioGroup from '../../components/MuiRadioGroup'
import MuiCheckBox from '../../components/MuiCheckBox'
import MuiTable from '../../components/MuiTable'
import MuiAlert from '../../components/MuiAlert'
import MuiSwitch from '../../components/MuiSwitch'
import MuiRating from '../../components/MuiRating'
import MuiAutoComplete from '../../components/MuiAutoComplete'
import MuiBox from '../../components/MuiBox'
import MuiCards from '../../components/MuiCards'
import MuiImageList from '../../components/MuiImageList'
import MuiNavbar from '../../components/MuiNavbar'
import MuiBreadcrumbs from '../../components/MuiBreadcrumbs'
import MuiBottomNav from '../../components/MuiBottomNav'
import MuiSkeleton from '../../components/MuiSkeleton'

const Home = () => {
  return (
    <Box>
      <Typography variant="h6">Home</Typography>
    </Box>
  )
}

const Favorite = () => {
  return (
    <Box>
      <Typography variant="h6">Favorite</Typography>
    </Box>
  )
}

const Contact = () => {
  return (
    <Box>
      <Typography variant="h6">Contact</Typography>
    </Box>
  )
}

const TestMui = () => {
  const [navValue, setNavValue] = useState(0)

  const handleNavChange = (e, newValue) => {
    setNavValue(newValue)
  }
  return (
    <>
      {/* <MultiTextComponent />
      <MuiButtonGroup />
      <MuiTextField />
      <MuiRadioGroup />
      <MuiCheckBox />
      <MuiTable />
      <MuiAlert />
      <MuiSwitch />
      <MuiRating />
      <MuiAutoComplete />
      <MuiBox />
      <MuiCards />
      <MuiImageList />
      <MuiNavbar />
       <MuiBreadcrumbs />  */}

      {/* {navValue === 0 && <Home />}

      {navValue === 1 && <Favorite />}

      {navValue === 2 && <Contact />}

      <MuiBottomNav handleNav={handleNavChange} /> */}

      <MuiSkeleton />
    </>
  )
}

export default TestMui
