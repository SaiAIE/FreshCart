
import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { getAllCategoriesProducts } from '../api/api.service';
import Cart from "./Cart";
import logo from "../assets/logo.svg";
import "../styles/Searchbar.css";

const SearchBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdownData, setDropdownData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { cart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate()


  useEffect(() => {
    const fetchDropdown = async () => {
      try {
        const response = await getAllCategoriesProducts();
        const allDepartments = {
          categoryName: "All Departments",
          icon: "fa fa-border-all",
          link: "/products",
          className: "All-Depts"
        }
        setDropdownData([allDepartments, ...response?.data]);
      } catch (err) {
        console.log(err.message);
        setError("Please Try Again Later !!!");
      } finally {
        setLoading(false);
      }
    };
    fetchDropdown();
  }, []);

  const handleCategoryClick = (category) => {
    setIsSidebarOpen(false)
    if (category.link) {
      navigate(category.link)
    } else {
      navigate(`/products/${category.categoryName}`)
    }
  }

  const handleProductClick = (productId) => {
    setIsSidebarOpen(false)
    navigate(`/product/${productId}`)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleHomeClick = () => {
    setIsSidebarOpen(false)
    navigate("/")
  }

  return (
    <div className="searchbar d-flex align-items-center justify-content-between w-100">
      <>
        <div role="complementary" className={`searchbar__sidebar ${isSidebarOpen ? 'searchbar__sidebar--open' : ''} position-fixed top-0 w-100 h-100 bg-white `}>
          <div className='searchbar__sidebar-top p-0 m-0 d-flex flex-row align-items-center justify-content-between'>
            <img src={logo} alt="" className='searchbar__logo searchbar__logo--mobile' style={{ cursor: "pointer" }} onClick={handleHomeClick} />
            <div className='searchbar__close-icon text-end' onClick={toggleSidebar}>
              <i className='fa-solid fa-xmark'></i>
            </div>
          </div>

          <div className='searchbar__navbar-main'>
            <div className='searchbar__navbar-mobile'>
              <div className='searchbar__input d-flex align-items-center position-relative rounded'>
                <input type="input" placeholder='Search for products' className='searchbar__input-field' />
                <i className='fa-solid fa-magnifying-glass position-absolute text-black'></i>
              </div>

              {loading && (
                <div className='d-flex align-items-center justify-content-center w-100'>
                  <div className='loader' data-testid="loader"></div>
                </div>
              )}

              {error && (
                <div className='d-flex align-items-center justify-content-center w-100'>
                  <div className='text-center fs-5 fw-normal'>{error}</div>
                </div>
              )}

              {dropdownData?.map((item, index) => (
                <div className='searchbar__dropdown position-relative' key={index}>
                  <div className={`searchbar__dropdown-heading ${item.className || ''} border-0 rounded`} >
                    <span onClick={() => handleCategoryClick(item)}>{item.categoryName}</span> {item.icon ? <i onClick={(e) => e.stopPropagation()} className={item.icon}></i> : <i class="fa-solid fa-angle-down"></i>}
                  </div>
                  {item.products && (
                    <div className="searchbar__dropdown-options position-absolute top-100 bg-white rounded-1 start-50 flex-row">
                      {item.products.map((option, idx) => (
                        <p key={idx} className='searchbar__dropdown-option m-0' onClick={() => handleProductClick(option.productId)}>{option.name}</p>
                      ))}
                    </div>
                  )}
                  {/* {item.heading === "Mega menu" && (
<div className="searchbar__dropdown-options searchbar__dropdown-options--mega flex-column align-items-start justify-content-evenly position-absolute bg-white">
                      {item.megaOptions.map((col, idx) => (
<div className="searchbar__menu-column d-flex flex-column justify-content-evenly" key={idx}>
<h4 className='searchbar__menu-heading'>{col.title}</h4>
<ul className='searchbar__menu-lists list-unstyled d-flex flex-column p-0 justify-content-evenly position-relative'>
                            {col.items.map((listItem, id) => (
<li key={id} className='searchbar__menu-item rounded-1'>{listItem}</li>
                            ))}
</ul>
</div>
                      ))}
                      {item.offer && (
<div className="searchbar__menu-column d-flex flex-column justify-content-evenly position-relative">
<img src={item.offer.imgSrc} alt="" className="searchbar__megamenu-img" />
<h2 className="searchbar__offer" dangerouslySetInnerHTML={{ __html: item.offer.text }} />
<button className="searchbar__offer-btn border-0 fw-semibold text-white rounded position-absolute">{item.offer.buttonText}</button>
</div>
                      )}
</div>
                  )} */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </>

      <div className='searchbar__left d-flex flex-row align-items-center justify-content-between'>
        <picture>
        <source srcSet={logo.replace(/\.(jpeg|png)$/, '.avif')} type="image/avif" />
        <source srcSet={logo.replace(/\.(jpeg|png)$/, '.webp')} type="image/webp" />
          <img
            src={logo}
            alt="Logo"
            className="searchbar__logo"
            onClick={handleHomeClick}
            loading='eager'
            decoding='async'
          />
        </picture>
        <div className='searchbar__main align-items-center'>
          <div className='searchbar__input position-relative'>
            <input type="input" placeholder='Search for products' className='searchbar__input-field rounded-1 text-secondary border border-outline-secondary' />
            <i className="fa-solid fa-magnifying-glass text-black position-absolute"></i>
          </div>
          <button className='searchbar__location-btn rounded'>
            <i className="fa-solid fa-location-dot"></i> Location
          </button>
        </div>
      </div>

      <div className='searchbar__options border-0 d-flex text-secondary'>
        <i className="fa-regular fa-heart searchbar__options-icon position-relative">
          <span className='searchbar__options-count position-absolute rounded-circle fw-semibold text-white'>4</span>
        </i>
        <i className="fa-regular fa-user searchbar__options-icon"></i>
        <i className="fa-solid fa-cart-shopping searchbar__options-icon position-relative" onClick={() => setCartOpen(true)} data-testid="cart-icon">
          <span className='searchbar__options-count position-absolute rounded-circle fw-semibold text-white'>{cart.length}</span>
        </i>


        {cartOpen && <div data-testid="cart-component"><Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} /></div>}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleSidebar}
          viewBox="0 0 16 16"
          width="32"
          height="32"
          fill="#0AAD0A"
          className="bi bi-text-indent-left text-primary searchbar__menu-icon"
          data-testid="searchbar__menu-icon"
        >
          <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708M7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"></path>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;