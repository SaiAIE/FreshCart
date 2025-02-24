import React from 'react'
import {HashRouter as Router, Route, Routes} from "react-router-dom"
import Page1 from "./pages/Main"
import Page2 from "./pages/Product"
import ProductInfo from './components2/ProductInfo'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Page1/>}></Route>
        <Route path="/product/:id" element={<Page2/>}></Route>
        <Route path='/productinfo/:id' element={<ProductInfo/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
