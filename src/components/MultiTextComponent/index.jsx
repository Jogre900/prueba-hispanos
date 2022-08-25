import { Typography } from '@material-ui/core'

const MultiTextComponent = () => {
  return (
    <div>
      <Typography variant='h1'>h1 header</Typography>
      <Typography variant='h2'>h2 header</Typography>
      <Typography variant='h3'>h3 header</Typography>
      <Typography variant='h4'>h4 header</Typography>
      <Typography variant='h5'>h5 header</Typography>
      <Typography variant='h6'>h6 header</Typography>

      <Typography variant='subtitle1'>subtitle 1</Typography>
      <Typography variant='subtitle2'>subtitle 2</Typography>

      <Typography variant='body1'>
        {' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptates,
        nisi porro exercitationem a illo. Mollitia dolore nam nisi amet?
      </Typography>
      <Typography variant='body2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto
        minus provident cupiditate enim? Quos accusantium nesciunt ab dolorum
        in!
      </Typography>
    </div>
  )
}

export default MultiTextComponent
