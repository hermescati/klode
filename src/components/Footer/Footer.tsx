import styles from "./Footer.module.css";
import { FaCcMastercard, FaCcVisa, FaCcPaypal } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className="row">
          <div className="col">
            <div className="row">klode.</div>
            <div className="row">
              Specialists in providing high-quality, stylish products for your
              wardrobe
            </div>
          </div>
          <div className="col">
            <div className="row">SHOP</div>
            <div className="row">All Collections</div>
            <div className="row">Summer Edition</div>
            <div className="row">Discounts</div>
          </div>
          <div className="col">
            <div className="row">COMPANY</div>
            <div className="row">About Us</div>
            <div className="row">Contact</div>
            <div className="row">Affiliates</div>
          </div>
          <div className="col">
            <div className="row">SUPPORT</div>
            <div className="row">FAQs</div>
            <div className="row">Cookie Policy</div>
            <div className="row">Terms of Use</div>
          </div>
          <div className="col">
            <div className="row">PAYMENT METHODS</div>
            <div className="row d-flex">
              <FaCcMastercard size="24px" />
              <FaCcVisa size="24px" />
              <FaCcPaypal size="24px" />
            </div>
          </div>
        </div>
        <div className="row">DIVIDER</div>
        <div className="row">Copyrights ©2023 klode. All rights reserved.</div>
      </div>
    </>
  );
};

export default Footer;
