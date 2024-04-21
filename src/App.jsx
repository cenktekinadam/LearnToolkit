import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Counter from './pages/Counter'
import Header from './components/Header'
import { useSelector } from 'react-redux'
import store from '../redux/store'
import Crud from './pages/Crud'

const App = () => {
  const { isDarkThem } = useSelector((store) => store.counterReducer)

  return <BrowserRouter>
    <div style={{ height: '100vh' }} className={isDarkThem ? 'bg-dark text-white' : 'bg-light text-dark'}>
      <Header />
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/crud' element={<Crud />} />

      </Routes>
    </div>
  </BrowserRouter>
}

export default App