import { Box, Divider, Grid, Typography, Stack } from '@mui/material'

const MuiBox = () => {
  return (
    <Box>
      <Typography variant="h4">MuiBox</Typography>
      <Box
        sx={{
          width: '250px',
          height: '250px',
          backgroundColor: '#f5fe00'
        }}
      >
        <Box component="article">
          <Typography variant="h4">article header</Typography>
          <Typography variant="body1">article body</Typography>
        </Box>
        <Box bgcolor="success.dark" width="100px" height="100px"></Box>
      </Box>

      <Typography variant="h4">Stack Component</Typography>

      <Stack
        spacing={2}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        sx={{
          border: '1px solid'
        }}
      >
        <Box>item 1</Box>
        <Box>item 2</Box>
        <Box>item 3</Box>
        <Box>item 4</Box>
      </Stack>
      <Box my="2rem">
        <Typography variant="h4">Grid Component</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box bgcolor="#00ccff">item 1</Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box bgcolor="#00ccff">item 1</Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box bgcolor="#00ccff">item 1</Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box bgcolor="#00ccff">item 1</Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box bgcolor="#00ccff">item 1</Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box bgcolor="#00ccff">item 1</Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default MuiBox
