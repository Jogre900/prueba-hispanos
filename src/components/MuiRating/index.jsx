import { useState } from 'react'
import { Box, Stack, Typography, Rating } from '@mui/material'
import {
  Favorite,
  SentimentSatisfied,
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentSatisfiedAlt,
  SentimentVerySatisfied
} from '@mui/icons-material'
import { styled } from '@mui/material/styles'
const icons = {
  1: {
    icon: <SentimentVeryDissatisfied fontSize="inherit" />,
    label: 'Very Dissatisfied'
  },
  2: {
    icon: <SentimentDissatisfied fontSize="inherit" />,
    label: 'Dissatisfied'
  },
  3: {
    icon: <SentimentSatisfied fontSize="inherit" />,
    label: 'Neutral'
  },
  4: {
    icon: <SentimentSatisfiedAlt fontSize="inherit" />,
    label: 'Satisfied'
  },
  5: {
    icon: <SentimentVerySatisfied fontSize="inherit" />,
    label: 'Very Satisfied'
  }
}

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+'
}

const IconContainer = (props) => {
  const { value, ...rest } = props
  return <span {...rest}>{icons[value].icon}</span>
}

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: 'hsl(129, 100%, 38%)'
  },
  '& .MuiRating-iconEmpty': {
    color: '#09f'
  }
})

const MuiRating = () => {
  const [value, setValue] = useState(0)
  const [valueTwo, setValueTwo] = useState(0)
  const [valueTree, setValueTree] = useState(0)
  const [hover, setHover] = useState(-1)
  const handleChange = (e, newValue) => {
    if (newValue !== null) setValue(newValue)
  }
  const handleChangeCustomRating = (e, newValue) => {
    if (newValue !== null) setValueTwo(newValue)
  }

  const handleChangeCustomLabel = (e, newValue) => {
    if (newValue !== null) setValueTree(newValue)
  }

  return (
    <Stack
      spacing={2}
      sx={{
        margin: '2rem 0'
      }}
    >
      <Typography variant="h4">MuiRating</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={handleChange}
        icon={<Favorite fontSize="inherit" />}
        emptyIcon={<Favorite fontSize="inherit" />}
        precision={0.5}
      />
      <Rating
        name="customized-emoji-icon"
        value={valueTwo}
        onChange={handleChangeCustomRating}
        IconContainerComponent={IconContainer}
        highlightSelectedOnly
      />

      <Box
        sx={{
          display: 'flex'
        }}
      >
        <StyledRating
          name="customized-label-rating"
          value={valueTree}
          onChange={handleChangeCustomLabel}
          getLabelText={(value) => `${labels[value]}`}
          onChangeActive={(e, newHover) => setHover(newHover)}
          precision={0.5}
        />
        <span>{hover !== -1 ? labels[hover] : ''}</span>
      </Box>
    </Stack>
  )
}

export default MuiRating
