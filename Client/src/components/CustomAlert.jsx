import React from 'react'
import "../styles/CustomAlert.css"
import CheckMark from './CheckMark'

const CustomAlert = ({message,onClose}) => {
    console.log("Custome ALERT")
  return (
    <div className='custom-alert position-fixed bottom-0 end-0 bg-white text-dark p-2 rounded shadow fw-bold d-flex align-items-center justify-content-center gap-2 bottom-0 end-0 min-w-150 fs-6 mb-2 me-2'>
        <div>
      <CheckMark/>
        </div>
      <p className='custom-alert-mssg'>{message}</p>
    </div>
  )
}

export default CustomAlert
