import { useNavigate } from 'react-router-dom'
import Container from '../../components/container'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'
import LocalAtm from '@mui/icons-material/LocalAtm'
import './styles.css'
const requestData = ['Almacenes', 'Compras', 'It', 'rrhh', 'Viajes']

export default function CreateRequest() {
  const navigate = useNavigate()
  const handleNavigation = () => {
    navigate('/')
  }
  return (
    <>
      <div className="align-items-center justify-space-between">
        <Button startIcon={<CloseIcon />} onClick={handleNavigation}>
          Cerrar
        </Button>
        <Button startIcon={<LocalAtm />}>precios</Button>
      </div>
      <Container>
        <div className="request-container">
          {requestData.map((elem, index) => (
            <div
              className="request-card d-flex justify-center align-items-center"
              key={index}
            >
              <span>{elem}</span>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
