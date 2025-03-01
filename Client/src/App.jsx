import React, { useEffect, useState,Suspense } from 'react'
import {HashRouter as Router, Route, Routes} from "react-router-dom"
import CustomAlert from './components/CustomAlert'
import ScrollToTop from './components/ScrollToTop'
import Products from './pages/Products'

const Page1 = React.lazy(()=> import("./pages/Main"))
const Page2 = React.lazy(()=> import("./pages/Product"))
const ProductInfo = React.lazy(()=> import('./components2/ProductInfo'))


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
      <ScrollToTop/>
      <Suspense fallback={
        <div className='d-flex align-items-center justify-content-center' style={{ height: "100vh", width: "100vw" }}>
        <div className='loader'></div>
      </div>
        }>
      <Routes>
        <Route path='/' element={<Page1/>}></Route>
        <Route path="/product/:id" element={<Page2/>}></Route>
        <Route path='/productinfo/:id' element={<ProductInfo/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
      </Routes>
      </Suspense>
    </Router>
    {showAlert && <CustomAlert message={alertMessage} onClose={closeAlert}/> }
    </div>

  )
}

export default App
