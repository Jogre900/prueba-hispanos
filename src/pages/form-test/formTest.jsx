import { Box, Typography, Paper, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
  .object({
    firstName: yup
      .string()
      .required('El nombre es requerido')
      .matches(/^[aA-zZ]+$/, 'No se permiten numeros'),
    lastName: yup.string().required('El apellido es requerido')
  })
  .required()

const formTest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  console.log(errors)

  const onSubmit = (data) => console.log({ data })

  return (
    <Box>
      <Typography component="h2" gutterBottom>
        Formulario con react-hook-form y Yup
      </Typography>
      <Box
        sx={{
          display: 'grid',
          placeContent: 'center'
        }}
      >
        <Box
          sx={{
            width: '444px'
          }}
        >
          <Paper
            sx={{
              width: '100%'
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box
                sx={{
                  maxWidth: '100%',
                  marginBottom: '2rem'
                }}
              >
                <input
                  style={{
                    width: '100%',
                    padding: '.8rem',
                    borderRadius: '.3rem',
                    border: '.5px solid #ccc'
                  }}
                  placeholder="fistName"
                  {...register('firstName')}
                />
                {errors.firstName && (
                  <Typography variant="subtitle1" color="red">
                    {errors.firstName.message}
                  </Typography>
                )}
              </Box>
              <Box
                sx={{
                  maxWidth: '100%',
                  marginBottom: '2rem'
                }}
              >
                <input
                  style={{
                    width: '100%',
                    padding: '.8rem',
                    borderRadius: '.3rem',
                    border: '.5px solid #ccc'
                  }}
                  placeholder="LastName"
                  {...register('lastName')}
                />
                {errors.lastName && (
                  <Typography variant="subtitle1" color="red">
                    {errors.lastName.message}
                  </Typography>
                )}
              </Box>

              <Button
                type="submit"
                variant="outlined"
                sx={{ marginBottom: '2rem' }}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Box>
      </Box>
    </Box>
  )
}

export default formTest
