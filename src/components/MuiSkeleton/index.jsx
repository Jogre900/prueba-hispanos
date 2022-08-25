import { useState, useEffect } from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Skeleton,
  Box,
  Typography,
  Stack
} from '@mui/material'

const SkeletonCard = () => {
  return (
    <Box>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="300px"
        height="150px"
      />
      <Box my={2}>
        <Typography variant="body1">
          <Skeleton animation="wave" width="300px" />
        </Typography>
        <Typography variant="body1">
          <Skeleton animation="wave" width="300px" />
        </Typography>
        <Typography variant="body1">
          <Skeleton animation="wave" width="300px" />
        </Typography>
        <Typography variant="body1">
          <Skeleton animation="wave" width="300px" />
        </Typography>
      </Box>
      <Stack spacing={2} direction="row">
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="75px"
          height="35px"
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="75px"
          height="35px"
        />
      </Stack>
    </Box>
  )
}

const InfoCard = () => {
  return (
    <Card sx={{ maxWidth: '300px' }}>
      <CardMedia
        component="img"
        height="150"
        width="200"
        image="https://source.unsplash.com/random/200x150"
        alt="react-img"
      />
      <CardContent>
        <Typography variant="h5">React</Typography>
        <Typography variant="body1" align="justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
          aspernatur quod. Magnam, eveniet. Impedit quis consequatur nostrum
          libero atque repellat.
        </Typography>
        <CardActions sx={{ marginTop: '1rem' }}>
          <Button variant="contained">Read</Button>
          <Button variant="outlined">Lear more</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <Box sx={{ margin: '2rem 0' }}>
      {loading ? (
        <Stack
          spacing={2}
          direction="row"
          display="flex"
          justifyContent="space-between"
        >
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </Stack>
      ) : (
        <Stack
          spacing={2}
          direction="row"
          display="flex"
          justifyContent="space-between"
        >
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </Stack>
      )}
    </Box>
  )
}

export default MuiSkeleton
