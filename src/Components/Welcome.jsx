import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS animations
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import "animate.css"; // WOW.js animations

const About = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library for scroll animations
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h6 className="section-title text-start  text-uppercase">About Us</h6>
            <h1 className="mb-4">
              We design thoughtful,
              <span className=" text-uppercase"> liveable spaces.</span>
            </h1>
            <p className="mb-4">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida
              risus commodo viverra maecenas.
            </p>

            <a className="btn btn-warning py-3 px-5 mt-2" href="">
              Explore More
            </a>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.1s"
                  src="/img/image.png"
                  alt="About 1"
                  style={{ marginTop: "25%" }}
                />
              </div>
              <div className="col-6 text-start">
                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="img/kitchen.png" alt="About 2" />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="img/image.png" alt="About 3" />
              </div>
              <div className="col-6 text-start">
                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="img/image.jpeg.png" alt="About 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
