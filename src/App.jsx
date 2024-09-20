import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import CounterSection from "./Components/counter";
import Footer from "./Components/Footer";
import About from "./Components/Welcome";
import Categories from "./Components/Card";
import Marquee from "./Components/slider";
import Product from "./Components/Product";

function App() {
  const navbarRef = useRef(null);
  const selectorRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);

  // Function to handle positioning of the hori-selector
  const test = () => {
    const tabsNewAnim = navbarRef.current;
    const activeItemNewAnim = tabsNewAnim.querySelector(".active");

    if (activeItemNewAnim && selectorRef.current) {
      const activeWidthNewAnimHeight = activeItemNewAnim.offsetHeight;
      const activeWidthNewAnimWidth = activeItemNewAnim.offsetWidth;
      const itemPosNewAnimTop = activeItemNewAnim.offsetTop;
      const itemPosNewAnimLeft = activeItemNewAnim.offsetLeft;

      selectorRef.current.style.top = `${itemPosNewAnimTop}px`;
      selectorRef.current.style.left = `${itemPosNewAnimLeft}px`;
      selectorRef.current.style.height = `${activeWidthNewAnimHeight}px`;
      selectorRef.current.style.width = `${activeWidthNewAnimWidth}px`;
    }
  };

  // Handle click on navbar items
  const handleNavItemClick = (event) => {
    const allItems = navbarRef.current.querySelectorAll("li");
    allItems.forEach((item) => item.classList.remove("active"));
    event.currentTarget.classList.add("active");
    setActiveItem(event.currentTarget); // Store active item
  };

  // Run test function on load and when window resizes
  useEffect(() => {
    test();
    const handleResize = () => {
      setTimeout(test, 500);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeItem]);

  // Run test when the component mounts
  useEffect(() => {
    test();

    // Set active class on load based on path
    const path = window.location.pathname.split("/").pop() || "index.html";
    const target = navbarRef.current.querySelector(`a[href='${path}']`);
    if (target) {
      target.parentElement.classList.add("active");
      setActiveItem(target.parentElement); // Set active item
    }
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <a className="navbar-brand navbar-logo" href="#">
          <img src="" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            document.querySelector(".navbar-collapse").classList.toggle("show");
            setTimeout(test, 300); // Adjust after navbar toggles
          }}
        >
          <i className="fas fa-bars text-white"></i>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          ref={navbarRef}
        >
          <ul className="navbar-nav ms-0 ">
            <div className="hori-selector" ref={selectorRef}>
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <li className="nav-item" onClick={handleNavItemClick}>
              <a className="nav-link" href="#">
                <i className="fas fa-tachometer-alt"></i>Dashboard
              </a>
            </li>
            <li className="nav-item" onClick={handleNavItemClick}>
              <a className="nav-link" href="#">
                <i className="far fa-address-book"></i>Address Book
              </a>
            </li>
            <li className="nav-item" onClick={handleNavItemClick}>
              <a className="nav-link" href="#">
                <i className="far fa-clone"></i>Components
              </a>
            </li>
            <li className="nav-item" onClick={handleNavItemClick}>
              <a className="nav-link" href="#">
                <i className="far fa-calendar-alt"></i>Calendar
              </a>
            </li>
            <li className="nav-item" onClick={handleNavItemClick}>
              <a className="nav-link" href="#">
                <i className="far fa-chart-bar"></i>Charts
              </a>
            </li>
            <li className="nav-item" onClick={handleNavItemClick}>
              <a className="nav-link" href="#">
                <i className="far fa-copy"></i>Documents
              </a>
            </li>
          </ul>
        </div>
      </nav>

        <div>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img/image.png" className="d-block w-100" alt="..."/>
            <div className="carousel-caption">
              <div>
                <h5 className="text-light" data-aos="flip-down" data-aos-duration="1500">DESIGN SPACES TO MAKE <br/> WONDERFUL LIVING</h5>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./img/image.jpeg.png" className="d-block w-100" alt="..."/>
            <div className="carousel-caption">
              <div>
                <h5 className="text-light" data-aos="flip-down" data-aos-duration="1500">MAKE YOUR <br/>LUXURIOS APARTMENT</h5>
                
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./img/kitchen.png" className="d-block w-100" alt="..."/>
            <div className="carousel-caption">
              <div>
                <h5 className="text-light"data-aos="flip-down" data-aos-duration="1500"> WHAT ARE STEPS TO <br/> REMODELLING A HOUSE</h5>
               
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
    </div>
        </div>

  
    

  


    </>
  );
}

export default App;
