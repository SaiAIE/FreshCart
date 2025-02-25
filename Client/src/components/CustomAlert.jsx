import React from 'react'
import "../styles/CustomAlert.css"
import CheckMark from './CheckMark'

const CustomAlert = ({message,onClose}) => {
    console.log("Custome ALERT")
  return (
    <div className='custom-alert'>
        <div>
      <CheckMark/>
        </div>
      <p className='custom-alert-mssg'>{message}</p>
    </div>
  )
}

export default CustomAlert
