import React, { useState,useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import Cart from "./Cart"
import axios from "axios"
import logo from "../assets/logo.svg";
import "../styles/Searchbar.css";

const SearchBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdownData,setDropdownData] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState("")
  const {cart} = useCart()
  const [cartOpen, setCartOpen] = useState(false)

  const api = import.meta.env.VITE_BACKEND

  useEffect(()=>{
    const fetchDropdown = async()=>{
      try{
        const response = await axios.get(`${api}/api/dropdowns/`)
        setDropdownData(response.data)
      }
      catch(err){
        console.log(err.message)
        setError("Please Try Again Later !!!")
      }
      finally{
        setLoading(false)
      }
    }
    fetchDropdown()
  },[])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="searchbar">
      <>
        <div className={`searchbar__sidebar ${isSidebarOpen ? 'searchbar__sidebar--open' : ''}`}>
          <div className='searchbar__sidebar-top'>
            <img src={logo} alt="" className='searchbar__logo searchbar__logo--mobile' />
            <div className='searchbar__close-icon' onClick={toggleSidebar}>
              <i className='fa-solid fa-xmark'></i>
            </div>
          </div>

          <div className='searchbar__navbar-main'>
            <div className='searchbar__navbar-mobile'>
              <div className='searchbar__input'>
                <input type="input" placeholder='Search for products' className='searchbar__input-field' />
                <i className='fa-solid fa-magnifying-glass'></i>
              </div>

              {loading && (
                <div className='d-flex align-items-center justify-content-center w-100'>
                <div className='loader'></div>
                </div>
              ) }

              {error && (
                <div className='d-flex align-items-center justify-content-center w-100'>
                  <div className='text-center fs-5 fw-normal'>{error}</div>
                </div>
              )}

              {dropdownData.map((item, index) => (
                <div className='searchbar__dropdown' key={index}>
                  <div className={`searchbar__dropdown-heading ${item.className || ''}`}>
                    {item.heading} {item.icon && <i className={item.icon}></i>}
                  </div>
                  {item.options && (
                    <div className="searchbar__dropdown-options">
                      {item.options.map((option, idx) => (
                        <p key={idx} className='searchbar__dropdown-option'>{option}</p>
                      ))}
                    </div>
                  )}
                  {item.heading === "Mega menu" && (
                    <div className="searchbar__dropdown-options searchbar__dropdown-options--mega">
                      {item.megaOptions.map((col, idx) => (
                        <div className="searchbar__menu-column" key={idx}>
                          <h4 className='searchbar__menu-heading'>{col.title}</h4>
                          <ul className='searchbar__menu-lists'>
                            {col.items.map((listItem, id) => (
                              <li key={id} className='searchbar__menu-item'>{listItem}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {item.offer && (
                        <div className="searchbar__menu-column">
                          <img src={item.offer.imgSrc} alt="" className="searchbar__megamenu-img" />
                          <h2 className="searchbar__offer" dangerouslySetInnerHTML={{ __html: item.offer.text }} />
                          <button className="searchbar__offer-btn">{item.offer.buttonText}</button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </>

      <div className='searchbar__left'>
        <img src={logo} alt="" className='searchbar__logo' />
        <div className='searchbar__main'>
          <div className='searchbar__input'>
            <input type="input" placeholder='Search for products' className='searchbar__input-field' />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <button className='searchbar__location-btn'>
            <i className="fa-solid fa-location-dot"></i> Location
          </button>
        </div>
      </div>

      <div className='searchbar__options'>
        <i className="fa-regular fa-heart searchbar__options-icon">
          <span className='searchbar__options-count'>4</span>
        </i>
        <i className="fa-regular fa-user searchbar__options-icon"></i>
        <i className="fa-solid fa-cart-shopping searchbar__options-icon" onClick={()=>setCartOpen(true)}>
          <span className='searchbar__options-count'>{cart.length}</span>
        </i>
        <Cart isOpen={cartOpen} onClose={()=>setCartOpen(false)}/>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleSidebar}
          viewBox="0 0 16 16"
          width="32"
          height="32"
          fill="#0AAD0A"
          className="bi bi-text-indent-left text-primary searchbar__menu-icon"
        >
          <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708M7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"></path>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;