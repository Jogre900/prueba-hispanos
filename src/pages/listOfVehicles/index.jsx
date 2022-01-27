import Header from '../../components/header'
import { Link } from 'react-router-dom'
import MaterialTable from '@material-table/core'
import { data } from '../../services/data/testData'
import VehicleItem from '../../components/vehicleItem'

const columns = [
  {
    title: 'Matricula',
    field: 'matricula',
  },
  {
    title: 'Marca',
    field: 'marca',
    render: (rowData) => (
      <VehicleItem marca={rowData.marca} matricula={rowData.matricula} />
    ),
  },
  {
    title: 'Modelo',
    field: 'modelo',
  },
]

export default function ListOfVehicles() {
  return (
    <>
      <Header className='justify-flex-end'>
        <nav className='navbar'>
          <ul className='d-flex'>
            <li>
              <Link className='link' to='/'>
                Vehiculos
              </Link>
            </li>
            <li>
              <Link className='link' to='/request'>
                Crear petición
              </Link>
            </li>
          </ul>
        </nav>
      </Header>
      <MaterialTable columns={columns} data={data} title='Vehiculos' />
    </>
  )
}
