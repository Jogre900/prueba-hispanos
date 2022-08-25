import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import AppLayout from './components/AppLayout'
import ListOfVehicles from './pages/listOfVehicles'
import DetailVehicle from './pages/detailVehicle'
import CreateRequest from './pages/request'
import PokemonList from './pages/pokemonSearch/list'
import Drag from './pages/drag'
import Heroes from './pages/Heroes'
import Posts from './pages/posts'

// import TestMui from './pages/mui-test'

import TableTest from './pages/table-test'
import FormTest from './pages/form-test'
import DotNotation from './pages/dotNotation'
import './App.css'

const TestMui = React.lazy(() => import('./pages/mui-test'))

function App() {
  return (
    <div className="App">
      <Header />

      <AppLayout>
        <Routes>
          <Route path="/" element={<ListOfVehicles />} />
          <Route path="/detail/:matricula" element={<DetailVehicle />} />
          <Route path="/request" element={<CreateRequest />} />
          <Route path="/pokemon" element={<PokemonList />} />
          <Route path="/drag" element={<Drag />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/posts" element={<Posts />} />
          {/* <Route
            path="/mui"
            element={
                <TestMui />
            }
          /> */}
          <Route
            path="/mui"
            element={
              <React.Suspense fallback={<h2>Loading...</h2>}>
                <TestMui />
              </React.Suspense>
            }
          />
          <Route path="/table" element={<TableTest />} />
          <Route path="/form" element={<FormTest />} />
          <Route path="/dot" element={<DotNotation />} />
        </Routes>
      </AppLayout>
    </div>
  )
}

export default App
