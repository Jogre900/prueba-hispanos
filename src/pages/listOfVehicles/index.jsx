import MaterialTable from '@material-table/core'
import { data } from '../../services/data/testData'
import VehicleItem from '../../components/vehicleItem'

const columns = [
  {
    title: 'Matricula',
    field: 'matricula'
  },
  {
    title: 'Marca',
    field: 'marca',
    render: (rowData) => (
      <VehicleItem marca={rowData.marca} matricula={rowData.matricula} />
    )
  },
  {
    title: 'Modelo',
    field: 'modelo'
  }
]

export default function ListOfVehicles() {
  return (
    <>
      <MaterialTable columns={columns} data={data} title="Vehiculos" />
    </>
  )
}
