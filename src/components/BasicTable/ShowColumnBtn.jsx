import { Box, Checkbox, Typography } from '@mui/material'

const ShowColumnBtn = ({ allColumns }) => {
  return (
    <Box>
      <Typography variant="h6">ShowColumnBtn</Typography>
      <Box>
        {allColumns.length > 0 &&
          allColumns.map((column, i) => {
            return (
              <Box key={i}>
                {typeof column.Header === 'string' ? (
                  <Typography component="label">
                    <Checkbox {...column.getToggleHiddenProps()} />
                    {column.Header}
                  </Typography>
                ) : null}
              </Box>
            )
          })}
      </Box>
    </Box>
  )
}

export default ShowColumnBtn
