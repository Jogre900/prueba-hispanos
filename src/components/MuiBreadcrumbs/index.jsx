import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import { NavigateNext } from '@mui/icons-material'

const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNext size="small" />}
      >
        <Link href="#">Home</Link>
        <Link href="#">Category</Link>
        <Link href="#">Men</Link>
        <Typography variant="body1" color="text.error">
          Shoes
        </Typography>
      </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadcrumbs
