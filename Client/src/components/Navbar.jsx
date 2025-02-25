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
    <div className="navbar">
      <div className="navbar__container">
        {dropdownData.map((item, index) => (
          <div className="navbar__dropdown" key={index}>
            <div className={`navbar__dropdown-heading ${item.className || ''}`}>
              {item.heading} {item.icon && <i className={item.icon}></i>}
            </div>

            {item.options && (
              <div className="navbar__dropdown-options">
                {item.options.map((option, idx) => (
                  <p key={idx} className="navbar__dropdown-option">{option}</p>
                ))}
              </div>
            )}

            {item.megaOptions && (
              <div className="navbar__dropdown-options--mega">
                {item.megaOptions.map((col, idx) => (
                  <div className="navbar__menu-column" key={idx}>
                    <h4 className="navbar__menu-column-title">{col.title}</h4>
                    <ul className="navbar__menu-list">
                      {col.items.map((listItem, id) => (
                        <li key={id} className="navbar__menu-item">{listItem}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {item.offer &&(
                  <div className="navbar__menu-column navbar__menu-column--offer">
                    <img src={item.offer.imgSrc} alt="" className="navbar__menu-image" />
                    <h2 className="navbar__menu-offer" dangerouslySetInnerHTML={{ __html: item.offer.text }} />
                    <button className="navbar__menu-btn">{item.offer.buttonText}</button>
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
