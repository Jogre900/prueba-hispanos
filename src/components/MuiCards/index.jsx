import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@mui/material'

const data = [
  {
    id: 1,
    title: 'React',
    content: 'React is a JavaScript library for building user interfaces.',
    image: 'https://source.unsplash.com/random'
  },
  {
    id: 2,
    title: 'React Native',
    content:
      'React Native is a framework for building native apps using React.',
    image: 'https://source.unsplash.com/random'
  },
  {
    id: 3,
    title: 'Vue',
    content:
      'Vue is a progressive JavaScript framework for building user interfaces.',
    image: 'https://source.unsplash.com/random'
  }
]

const CustomCard = ({ title, content, image }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="150"
        image={image}
        alt={`${title}-${image}`}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1">{content}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Read</Button>
        <Button variant="outlined">Lear more</Button>
      </CardActions>
    </Card>
  )
}

const MuiCardDemo = () => {
  return (
    <Box
      sx={{
        margin: '2rem 0'
      }}
    >
      <Typography variant="h4" gutterBottom>
        MuiCard
      </Typography>
      <Grid container spacing={2}>
        {data.map(({ id, title, content, image }) => (
          <Grid item xs={12} md={4} key={id}>
            <CustomCard title={title} content={content} image={image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default MuiCardDemo
