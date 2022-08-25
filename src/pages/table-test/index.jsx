import { useState, useEffect, useMemo } from 'react'
import { Box, Typography, TextField } from '@mui/material'
import BasicTable from '../../components/BasicTable'
import fakeTableData from '../../lib/data/fakeTableData.json'
import TableTwo from '../../components/TableTwo'
import Utils from '../../utils/utils'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../../store/slices/users'

const TableTest = () => {
  const dispatch = useDispatch()
  const { users, isLoading } = useSelector((state) => state.user)
  console.log({ users })
  const [values, setValues] = useState([])
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(1)
  const columns = [
    {
      Header: 'Id',
      accessor: 'id'
    },
    {
      Header: 'First Name',
      accessor: 'first_name'
    },
    {
      Header: 'Last Name',
      accessor: 'last_name'
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Age',
      accessor: 'age'
    },
    {
      Header: 'Country',
      accessor: 'country'
    }
  ]

  // const handleRowsId = (data) => {
  //   // console.log({ data })
  //   setValues(data)
  // }

  useEffect(() => {
    dispatch(getUsers())
    setLoading(0)
  }, [])

  useEffect(() => {
    let items = users

    if (text) {
      items = Utils.filterArrayByText(items, text)
    }

    // console.log(text)
    console.log('filtrado', items)

    setValues(items)
  }, [text, users])

  if (isLoading && values.length === 0) {
    return <div>Cargando...</div>
  }

  if (loading === 0 && users.length === 0 && values.length === 0) {
    return <div>Sin resultados</div>
  }

  return (
    <Box>
      <Typography variant="h4">Example of react-table</Typography>
      {/* <TableTwo handleRows={handleRowsId} /> */}

      <TextField
        aria-label="search-text"
        sx={{ margin: '2rem 0' }}
        fullWidth
        variant="outlined"
        id="searchText"
        name="searchText"
        label="Busqueda"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <BasicTable columns={columns} data={values} />
    </Box>
  )
}

export default TableTest
