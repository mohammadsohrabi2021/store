import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import DetailsProduct from './pages/DetailsProduct'
import CheckoutPage from './pages/CheckoutPage'
import PageNotFound from './pages/404'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/products' replace/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/products/:id' element={<DetailsProduct/>}/>
      <Route path='/checkout' element={<CheckoutPage/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
    </Routes>
  )
}

export default App
