import React from 'react'
import uk from "../assets/uk.png"
import germany from "../assets/germany.png"
import "../styles/Topbar.css"

const Topbar = () => {
  return (
      <div className='topbar'>
        <p className='topbar_text'>Super Value Deals - Save more with coupons</p>
        <div className='topbar__menu'>
          <div className='topbar__dropdown'>
        <div className='topbar__dropdown-heading '> <img src={uk} width="20px" alt="" className='topbar__menu-img'/> English <i class="fa-solid fa-angle-down"></i></div>
          <div className='topbar__dropdown-options '>
        <p className='topbar__dropdown-option '> <img src={uk} width="20px" alt="" className='topbar__menu-img'/> English</p>
        <p className='topbar__dropdown-option '> <img src={germany} width="20px" alt="" className='topbar__menu-img'/> Deustch</p>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Topbar
