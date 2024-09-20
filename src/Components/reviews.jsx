import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import "owl.carousel/dist/assets/owl.carousel.css"; // Owl Carousel styles
import "owl.carousel/dist/assets/owl.theme.default.css"; // Owl Carousel default theme
import OwlCarousel from "react-owl-carousel"; // Import React Owl Carousel
import "animate.css"; // Animate.css for WOW.js animations
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  return (
    <div className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn" data-wow-delay="0.1s">
      <div className="container">
        <OwlCarousel className="owl-carousel testimonial-carousel py-5" loop margin={10} nav>
          {/* Testimonial Item 1 */}
          <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
            <p>
              Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet
              ea lorem amet est kasd kasd et erat magna eos
            </p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg" alt="Client 1" style={{ width: "45px", height: "45px" }} />
              <div className="ps-3">
                <h6 className="fw-bold mb-1">Client Name</h6>
                <small>Profession</small>
              </div>
            </div>
            <FontAwesomeIcon icon={faQuoteRight} className="fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" />
          </div>
          {/* Testimonial Item 2 */}
          <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
            <p>
              Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet
              ea lorem amet est kasd kasd et erat magna eos
            </p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-2.jpg" alt="Client 2" style={{ width: "45px", height: "45px" }} />
              <div className="ps-3">
                <h6 className="fw-bold mb-1">Client Name</h6>
                <small>Profession</small>
              </div>
            </div>
            <FontAwesomeIcon icon={faQuoteRight} className="fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" />
          </div>
          {/* Testimonial Item 3 */}
          <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
            <p>
              Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet
              ea lorem amet est kasd kasd et erat magna eos
            </p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-3.jpg" alt="Client 3" style={{ width: "45px", height: "45px" }} />
              <div className="ps-3">
                <h6 className="fw-bold mb-1">Client Name</h6>
                <small>Profession</small>
              </div>
            </div>
            <FontAwesomeIcon icon={faQuoteRight} className="fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonial;
