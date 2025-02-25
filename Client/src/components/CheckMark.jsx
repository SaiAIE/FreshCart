import React from 'react'
import "../styles/CheckMark.css"
const CheckMark = () => {
  return (
    <svg className='checkmark' viewBox='0 0 52 52' xmlns='http://www.w3.org/2000/svg'>
        <circle className='checkmark-circle' cx="26" cy="26" r="25"/>
        <path className='checkmark-check' fill="none" d="M14 27l7 7 16-16"/>
    </svg>
  )
}

export default CheckMark
