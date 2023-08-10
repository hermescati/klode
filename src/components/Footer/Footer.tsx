import "./Footer.css";
import { FaCcMastercard, FaCcVisa, FaCcPaypal } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="row-flex footer-links">
          <div className="col footer-container">
            <h1 className="footer-logo">klode.</h1>
            <p className="footer-slogan">
              Specialists in providing high-quality, stylish products for your
              wardrobe
            </p>
          </div>
          <div className="col footer-container">
            <h4 className="footer-header">Shop</h4>
            <div className="col footer-wrapper">
              <a href="/collections">
                <p className="footer-item">All Collections</p>
              </a>
              <a href="/summer">
                <p className="footer-item">Summer Edition</p>
              </a>
              <a href="/discounts">
                <p className="footer-item">Discounts</p>
              </a>
            </div>
          </div>
          <div className="col footer-container">
            <h4 className="footer-header">Company</h4>
            <div className="col footer-wrapper">
              <a href="/about">
                <p className="footer-item">About Us</p>
              </a>
              <a href="/contact">
                <p className="footer-item">Contact</p>
              </a>
              <a href="/affiliates">
                <p className="footer-item">Affiliates</p>
              </a>
            </div>
          </div>
          <div className="col footer-container">
            <h4 className="footer-header">Privacy</h4>
            <div className="col footer-wrapper">
              <a href="/terms">
                <p className="footer-item">Terms of use</p>
              </a>
              <a href="/cookies">
                <p className="footer-item">Cookie Policy</p>
              </a>
            </div>
          </div>
          <div className="col footer-container">
            <h4 className="footer-header">Payment Methods</h4>
            <div className="row payment-wrapper">
              <FaCcMastercard size="24" color="#1d242d" />
              <FaCcVisa size="24" color="#1d242d" />
              <FaCcPaypal size="24" color="#1d242d" />
            </div>
          </div>
        </div>
        <hr className="divider"></hr>
        <div className="row-flex center">
          <p className="footer-copyright">
            Copyrights ©{new Date().getFullYear()} klode. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
