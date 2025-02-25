import React, { useEffect, useState } from 'react'
import {HashRouter as Router, Route, Routes} from "react-router-dom"
import Page1 from "./pages/Main"
import Page2 from "./pages/Product"
import ProductInfo from './components2/ProductInfo'
import CustomAlert from './components/CustomAlert'

const App = () => {
  const [alertMessage, setAlertMessage] = useState("")
  const [showAlert,setShowAlert] = useState(false)

  useEffect(()=>{
    window.alert=(message)=>{
      setAlertMessage(message)
      setShowAlert(true)

      setTimeout(() => {
        setShowAlert(false)
        setAlertMessage("")
      }, 5000);
    }
  },[])

  const closeAlert = ()=>{
    setShowAlert(false)
    setAlertMessage("")
  }

  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Page1/>}></Route>
        <Route path="/product/:id" element={<Page2/>}></Route>
        <Route path='/productinfo/:id' element={<ProductInfo/>}></Route>
      </Routes>
    </Router>
    {showAlert && <CustomAlert message={alertMessage} onClose={closeAlert}/> }
    </div>

  )
}

export default App
