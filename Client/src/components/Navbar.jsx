import React, { useState, useEffect } from 'react';
import { dropdownData } from '../assets/data';
import axios from "axios";
import "../styles/Navbar.css";

const Navbar = () => {
  const [dropdownData, setDropdownData] = useState([]);
  const api = import.meta.env.VITE_BACKEND;

  useEffect(() => {
    const fetchDropdown = async () => {
      try {
        const response = await axios.get(`${api}/api/dropdowns/`);
        setDropdownData(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchDropdown();
  }, []);

  return (
    <div className="navbar flex-row w-100 align-items-start justify-content-start border-bottom border-outline-secondary">
      <div className="navbar__container d-flex align-items-start justify-content-between">
        {dropdownData.map((item, index) => (
          <div className="navbar__dropdown position-relative" key={index}>
            <div className={`navbar__dropdown-heading ${item.className || ''} border-0 fs-6 rounded`}>
              {item.heading} {item.icon && <i className={item.icon}></i>}
            </div>

            {item.options && (
              <div className="navbar__dropdown-options position-absolute top-100 start-50 bg-white rounded-3 overflow-hidden z-1 py-2 px-2 flex-row">
                {item.options.map((option, idx) => (
                  <p key={idx} className="navbar__dropdown-option m-0 rounded-2 fs-6">{option}</p>
                ))}
              </div>
            )}

            {item.megaOptions && (
              <div className="navbar__dropdown-options--mega flex-row align-items-start justify-content-evenly position-absolute gap-4 bg-white rounded-3 p-3 z-3">
                {item.megaOptions.map((col, idx) => (
                  <div className="navbar__menu-column p-2 d-flex flex-column justify-content-evenly gap-3 position-relative" key={idx}>
                    <h4 className="navbar__menu-column-title fw-semibold">{col.title}</h4>
                    <ul className="navbar__menu-list list-unstyled d-flex flex-column p-0 justify-content-evenly gap-2">
                      {col.items.map((listItem, id) => (
                        <li key={id} className="navbar__menu-item rounded fs-6">{listItem}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {item.offer &&(
                  <div className="navbar__menu-column navbar__menu-column--offer">
                    <img src={item.offer.imgSrc} alt="" className="navbar__menu-image" />
                    <div className='navbar__menu-offer-content position-absolute d-flex flex-column align-items-start justify-content-between gap-1'>
                    <h2 className="navbar__menu-offer fs-5 px-2 py-1 fw-semibold" dangerouslySetInnerHTML={{ __html: item.offer.text }} />
                    <button className="navbar__menu-btn ms-2 px-2 py-1 rounded border-0 text-white">{item.offer.buttonText}</button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
