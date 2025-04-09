import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import {getAllCategoriesProducts } from '../api/api.service';
import "../styles/Navbar.css";

const Navbar = () => {
  const [dropdownData, setDropdownData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0)
  const categoriesPerPage = 6
  const navigate = useNavigate()

  useEffect(() => {
    const fetchDropdown = async () => {
      try {
        const response = await getAllCategoriesProducts();
        console.log(response.data)
        const allDepartments ={
          categoryName:"All Departments",
          icon:"fa fa-border-all",
          link:"/products",
          className:"All-Depts"
        }
        setDropdownData([allDepartments,...response?.data]);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchDropdown();
  }, []);

  const handleCategoryClick = (category)=>{
    if(category.link){
      navigate(category.link)
    } else{
      navigate(`/products/${category.categoryName}`)
    }
  }

  const handleProductClick = (productId) =>{
    navigate(`/product/${productId}`)
  }

  const currentCategories = dropdownData.slice(
    currentPage * categoriesPerPage,
    (currentPage + 1) * categoriesPerPage
  )

  const handleNextPage = ()=>{
    if((currentPage + 1) * categoriesPerPage < dropdownData.length){
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = ()=>{
    if(currentPage > 0){
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div role='navigation' className="navbar flex-row w-100 align-items-center justify-content-center border-bottom border-outline-secondary position-relative">
      <div className="navbar__container d-flex align-items-center justify-content-between w-100">
        {currentCategories.length>0 && currentCategories.map((item, index) => (
          <div className="navbar__dropdown position-relative" key={index}>
            <div data-testid={`dropdown-heading-${index}`} className={`navbar__dropdown-heading ${item.className || ''} border-0 fs-6 rounded cursor-pointer`} onClick={()=> handleCategoryClick(item)}>
              {item.categoryName} {item.icon ? <i className={item.icon}></i> : <i class="fa-solid fa-angle-down"></i>}
            </div>

            {item?.products?.length > 0 ? (
              <div className="navbar__dropdown-options position-absolute top-100 start-50 bg-white rounded-3 overflow-hidden z-1 py-2 px-2 flex-row">
                {item.products.map((option, idx) => (
                  <p key={idx} className="navbar__dropdown-option m-0 rounded-2 fs-6" onClick={()=> handleProductClick(option.productId)}>{option.name}</p>
                ))}
              </div> 
            ):null}
          </div>
        ))}
      </div>
      <div className='d-flex align-items-center w-100 justify-content-center'>
      <div className='navbar__pagination d-flex justify-content-between position-absolute top-25' >
        <button className='navbar__pagination-btn border rounded-circle' onClick={handlePrevPage} disabled={currentPage === 0}>
        <i class="fa-solid fa-angle-left"></i>
        </button>
        <button className='navbar__pagination-btn border rounded-circle' onClick={handleNextPage} disabled={(currentPage+1) * categoriesPerPage >= dropdownData.length}>
        <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
