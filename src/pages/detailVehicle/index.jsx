import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../../components/header'
import Container from '../../components/container'
import TextInput from '../../components/textInput'
import Multiselect from 'multiselect-react-dropdown'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import CloseIcon from '@mui/icons-material/Close'
import './styles.css'
import { data } from '../../services/data/testData'

export default function DetailVehicle() {
  const [options] = useState([
    { name: 'Jose Zaragoza', id: 1 },
    { name: 'Maria Ordoñes', id: 2 },
  ])

  const { matricula } = useParams()
  const navigate = useNavigate()
  const filterVehicle = data.find((elem) => elem.matricula === matricula)
  const [vehicle, setVehicle] = useState(filterVehicle)

  const handleNavigation = () => {
    navigate('/')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setVehicle((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const indexTo = data.findIndex(
      ({ matricula }) => matricula === vehicle.matricula
    )
    data[indexTo] = vehicle
  }
  return (
    <>
      <Header className='align-items-center justify-space-between'>
        <Button startIcon={<CloseIcon />} onClick={handleNavigation}>
          Cerrar
        </Button>
        <div>
          <Button
            startIcon={<SaveIcon />}
            variant='contained'
            onClick={handleSubmit}
            className='mr-2'
          >
            Guardar
          </Button>
          <Button startIcon={<DeleteIcon />} color='error' variant='contained'>
            Eliminar
          </Button>
        </div>
      </Header>
      <Container>
        <form className='form-container' onSubmit={handleSubmit}>
          <div className='sub-container-1'>
            <div className='sub-container-1-1'>
              <TextInput
                className='col-1'
                label='Matricula *'
                name='matricula'
                placeholder={filterVehicle.matricula}
                disabled={true}
              />
              <TextInput
                className='col-6'
                label='Estado *'
                name='estado'
                placeholder={filterVehicle.estado}
                value={vehicle.estado}
                onChange={handleChange}
              />

              <TextInput
                className='col-1'
                label='Bastidor *'
                name='bastidor'
                placeholder={filterVehicle.bastidor}
                value={vehicle.bastidor}
                onChange={handleChange}
              />

              <TextInput
                className='col-6'
                label='Tipo de foto *'
                name='tipo_foto'
                placeholder={filterVehicle.tipo_foto}
                value={vehicle.tipo_foto}
                onChange={handleChange}
              />

              <TextInput
                className='col-1'
                label='Marca *'
                name='marca'
                placeholder={filterVehicle.marca}
                value={vehicle.marca}
                onChange={handleChange}
              />
              <TextInput
                className='col-6'
                label='Tipo de vehiculo *'
                name='tipo_vehiculo'
                placeholder={filterVehicle.tipo_vehiculo}
                value={vehicle.tipo_vehiculo}
                onChange={handleChange}
              />

              <TextInput
                className='col-12'
                label='Modelo *'
                name='modelo'
                placeholder={filterVehicle.modelo}
                value={vehicle.modelo}
                onChange={handleChange}
              />

              <TextInput
                className='col-1'
                label='Capacidad *'
                name='capacidad'
                placeholder={filterVehicle.capacidad}
                value={vehicle.capacidad}
                onChange={handleChange}
              />

              <TextInput
                className='col-6'
                label='Codigo neumatico *'
                name='codigo_neumatico'
                placeholder={filterVehicle.codigo_neumatico}
                value={vehicle.codigo_neumatico}
                onChange={handleChange}
              />
            </div>
            <div className='sub-container-1-2'>
              <TextInput
                className='col-1'
                label='Fecha adquisición *'
                name='fecha_adquisicion'
                placeholder={filterVehicle.fecha_adquisicion}
                value={vehicle.fecha_adquisicion}
                onChange={handleChange}
              />
              <TextInput
                className='col-6'
                label='Fecha devolución *'
                name='fecha_devolucion'
                placeholder={filterVehicle.fecha_devolucion}
                value={vehicle.fecha_devolucion}
                onChange={handleChange}
              />
              <TextInput
                className='col-1'
                label='Proxima ITV *'
                name='itv'
                placeholder={filterVehicle.itv}
                value={vehicle.itv}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='sub-container-2'>
            <div className='col-12'>
              <Multiselect
                className='col-12'
                style={{
                  multiselectContainer: {
                    width: '100%',
                  },
                }}
                options={options} // Options to display in the dropdown
                //   selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                displayValue='name' // Property name to display in the dropdown options
              />
            </div>
            <TextInput
              className='col-1'
              label='Contrato *'
              name='contrato'
              placeholder={filterVehicle.contrato}
              value={vehicle.contrato}
              onChange={handleChange}
            />

            <select
              className='col-6'
              placeholder='Cliente *'
              name='cliente'
              onChange={handleChange}
            >
              {filterVehicle.cliente.map((elem) => (
                <option key={elem.id} value={elem.name}>
                  {elem.name}
                </option>
              ))}
            </select>

            <TextInput
              className='col-1'
              label='Rotulación *'
              name='rotulacion'
              placeholder={filterVehicle.rotulacion}
              value={vehicle.rotulacion}
              onChange={handleChange}
            />

            <TextInput
              className='col-6'
              label='Segunda llave *'
              name='segunda_llave'
              placeholder={filterVehicle.segunda_llave}
              value={vehicle.segunda_llave}
              onChange={handleChange}
            />

            <TextInput
              className='col-1'
              label='Documentación *'
              name='documentacion'
              placeholder={filterVehicle.documentacion}
              value={vehicle.documentacion}
              onChange={handleChange}
            />

            <TextInput
              className='col-6'
              label='Tipo de servicio *'
              name='tipo_servicio'
              placeholder={filterVehicle.tipo_servicio}
              value={vehicle.tipo_servicio}
              onChange={handleChange}
            />

            <TextInput
              className='col-1'
              label='Servicio *'
              name='servicio'
              placeholder={filterVehicle.servicio}
              value={vehicle.servicio}
              onChange={handleChange}
            />

            <TextInput
              className='col-6'
              label='Región *'
              name='region'
              placeholder={filterVehicle.region}
              value={vehicle.region}
              onChange={handleChange}
            />
            <TextInput
              className='col-1'
              label='Area *'
              name='area'
              placeholder={filterVehicle.area}
              value={vehicle.area}
              onChange={handleChange}
            />

            <TextInput
              className='col-6'
              label='Provincia *'
              name='provincia'
              placeholder={filterVehicle.provincia}
              value={vehicle.provincia}
              onChange={handleChange}
            />

            <TextInput
              className='col-1'
              label='Seguro *'
              name='seguro'
              placeholder={filterVehicle.seguro}
              value={vehicle.seguro}
              onChange={handleChange}
            />

            <TextInput
              className='col-6'
              label='Solred *'
              name='solred'
              placeholder={filterVehicle.solred}
              value={vehicle.solred}
              onChange={handleChange}
            />
          </div>
        </form>
      </Container>
    </>
  )
}
