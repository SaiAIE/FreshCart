import React from 'react'
import uk from "../assets/uk.png"
import germany from "../assets/germany.png"
import "../styles/Topbar.css"

const Topbar = () => {
  return (
      <div className='topbar d-flex w-100 align-items-center fs-6'>
        <p className='topbar_text m-0'>Super Value Deals - Save more with coupons</p>
        <div className='topbar__menu m-0 pe-0'>
          <div className='topbar__dropdown position-relative'>
        <div className='topbar__dropdown-heading cursor-pointer bg-none border-0 rounded fs-6 d-flex flex-row align-items-center justify-content-center gap-1 pe-0 m-0 px-3'> <img src={uk} width="20px" alt="" className='topbar__menu-img'/> English <i class="fa-solid fa-angle-down"></i></div>
          <div className='topbar__dropdown-options position-absolute top-100 start-50 bg-white rounded z-1 p-1'>
        <p className='topbar__dropdown-option mx-1 my-1 rounded d-flex flex-row align-items-center justify-content-start cursor-pointer px-2 py-1'> <img src={uk} width="20px" alt="" className='topbar__menu-img me-2'/> English</p>
        <p className='topbar__dropdown-option mx-1 my-1 rounded d-flex flex-row align-items-center justify-content-start cursor-pointer px-2 py-1'> <img src={germany} width="20px" alt="" className='topbar__menu-img me-2'/> Deustch</p>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Topbar
