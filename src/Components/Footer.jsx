import React from "react";
import "animate.css"; // For animation
import "bootstrap/dist/css/bootstrap.min.css"; // For Bootstrap styles
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
      <div className="container pb-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-4">
            <div className=" rounded p-4">
              <a href="index.html">
                <h1 className="text-white text-uppercase mb-3">Hotelier</h1>
              </a>
              <p className="text-white mb-0">
                Download{" "}
                <a className="text-dark fw-medium" href="https://htmlcodex.com/hotel-html-template-pro">
                  Hotelier – Premium Version
                </a>
                , build a professional website for your hotel business and grab the attention of new visitors upon your site’s launch.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <h6 className="section-title text-start text-uppercase mb-4">Contact</h6>
            <p className="mb-2">
              <FaMapMarkerAlt className="me-3" />
              123 Street, New York, USA
            </p>
            <p className="mb-2">
              <FaPhoneAlt className="me-3" />
              +012 345 67890
            </p>
            <p className="mb-2">
              <FaEnvelope className="me-3" />
              info@example.com
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="#">
                <FaTwitter />
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <FaFacebookF />
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <FaYoutube />
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="row gy-5 g-4">
              <div className="col-md-6">
                <h6 className="section-title text-start  text-uppercase mb-4">Company</h6>
                <a className="btn btn-link" href="#">
                  About Us
                </a>
                <a className="btn btn-link" href="#">
                  Contact Us
                </a>
                <a className="btn btn-link" href="#">
                  Privacy Policy
                </a>
                <a className="btn btn-link" href="#">
                  Terms & Condition
                </a>
                <a className="btn btn-link" href="#">
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a className="border-bottom" href="#">
                Your Site Name
              </a>
              , All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="#">Home</a>
                <a href="#">Cookies</a>
                <a href="#">Help</a>
                <a href="#">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
