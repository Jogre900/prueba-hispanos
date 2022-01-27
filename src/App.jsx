import { Routes, Route } from 'react-router-dom'
import ListOfVehicles from './pages/listOfVehicles'
import DetailVehicle from './pages/detailVehicle'
import CreateRequest from './pages/request'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<ListOfVehicles />} />
        <Route path='/detail/:matricula' element={<DetailVehicle />} />
        <Route path='/request' element={<CreateRequest />} />
      </Routes>
    </div>
  )
}

export default App
