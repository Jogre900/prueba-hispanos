import {
  Alert,
  Box,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@mui/material'

const testData = [
  {
    id: 1,
    first_name: 'Hayward',
    last_name: 'Crudgington',
    email: 'hcrudgington0@booking.com',
    gender: 'Male',
    ip_address: '241.221.91.218'
  },
  {
    id: 2,
    first_name: 'Jefferson',
    last_name: 'Airlie',
    email: 'jairlie1@bbb.org',
    gender: 'Male',
    ip_address: '192.100.161.250'
  },
  {
    id: 3,
    first_name: 'Floris',
    last_name: 'Joplin',
    email: 'fjoplin2@blinklist.com',
    gender: 'Female',
    ip_address: '236.144.154.47'
  },
  {
    id: 4,
    first_name: 'Cherey',
    last_name: 'Pickin',
    email: 'cpickin3@nhs.uk',
    gender: 'Female',
    ip_address: '104.58.176.168'
  },
  {
    id: 5,
    first_name: 'Germaine',
    last_name: 'Capper',
    email: 'gcapper4@gmpg.org',
    gender: 'Male',
    ip_address: '58.252.29.129'
  },
  {
    id: 6,
    first_name: 'Ty',
    last_name: 'Damrell',
    email: 'tdamrell5@nifty.com',
    gender: 'Male',
    ip_address: '220.254.152.130'
  },
  {
    id: 7,
    first_name: 'Delly',
    last_name: 'Stote',
    email: 'dstote6@fotki.com',
    gender: 'Female',
    ip_address: '222.10.0.48'
  },
  {
    id: 8,
    first_name: 'Arthur',
    last_name: 'Haville',
    email: 'ahaville7@seesaa.net',
    gender: 'Male',
    ip_address: '191.165.73.33'
  },
  {
    id: 9,
    first_name: 'Teresa',
    last_name: 'Treadway',
    email: 'ttreadway8@ifeng.com',
    gender: 'Genderqueer',
    ip_address: '90.113.237.171'
  },
  {
    id: 10,
    first_name: 'Lori',
    last_name: 'Broker',
    email: 'lbroker9@craigslist.org',
    gender: 'Female',
    ip_address: '123.141.63.108'
  }
]

const MuiTable = () => {
  return (
    <Box>
      <Alert severity="info" style={{ margin: '2rem 0' }}>
        Users Data
      </Alert>
      <TableContainer component={Paper} sx={{ maxHeight: '450px' }}>
        <Table aria-label="simple data table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testData.map((data) => (
              <TableRow key={data.id}>
                <TableCell>{data.id}</TableCell>
                <TableCell>{`${data.first_name} ${data.last_name}`}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default MuiTable
