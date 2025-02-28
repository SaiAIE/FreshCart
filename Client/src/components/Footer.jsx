import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../styles/Footer.css";

const Footer = () => {
  const [footerData, setFooterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const api = import.meta.env.VITE_BACKEND;

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const response = await axios.get(`${api}/api/footer/`);
        setFooterData(response.data);
      } catch (err) {
        console.log(err.message);
      } finally{
        setLoading(false);
      }
    };
    fetchFooter();
  }, []);

  return (
    <footer className="footer text-muted w-100">
      <div className="footer__content d-flex justify-content-between flex-wrap gap-0">
        {loading ? (
          <div className='loader-container'>
          <div className="loader"></div>
          </div>
        ) : (
          footerData.map((column, index) => (
            <div key={index} className="footer__column flex-grow-1">
              {column.heading && <h4 className="footer__column-heading fs-6 fw-semibold mb-3">{column.heading}</h4>}
              <ul className="footer__column-list p-0 list-unstyled">
                {column.items.map((item, idx) => (
                  <li key={idx} className="footer__column-item mb-2 fw-semibold mb-3 ">{item}</li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
      <div className="footer__bottom border-top border-bottom d-flex align-items-center justify-content-center gap-2 py-4">
        <div className="footer__payment-partners d-flex align-items-center gap-3 w-100 fs-6 fw-semibold text-black">
          <span className="footer__payment-partners-text">Payment Partners</span>
          <img className="footer__payment-partner-logo" src="https://upload.wikimedia.org/wikipedia/commons/6/69/Amazon_Pay_logo.png" alt="Amazon Pay" />
          <img className="footer__payment-partner-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" />
          <img className="footer__payment-partner-logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
          <img className="footer__payment-partner-logo" src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
        </div>
        <div className="footer__app-links d-flex gap-3">
          <span className="footer__app-links-text">Get deliveries with FreshCart</span>
          <img className="footer__app-link-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Available_on_the_App_Store_%28black%29_SVG.svg/640px-Available_on_the_App_Store_%28black%29_SVG.svg.png" alt="App Store" />
          <img className="footer__app-link-logo" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
        </div>
      </div>
      <div className="footer__last d-flex w-100 justify-content-between">
        <p className="footer__last-text">© 2022 - 2025 FreshCart eCommerce HTML Template. All rights reserved. Powered by <span className="footer__highlight fw-bold">Codescandy.</span></p>
        <div className="footer__social-media">
          Follow us on <i className="footer__social-icon fa-brands fa-facebook"></i> <i className="footer__social-icon fa-brands fa-twitter"></i> <i className="footer__social-icon fa-brands fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;