import React, { useEffect, useState } from "react";
import { BiBeer, BiAnchor, BiUser } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import WOW from "wowjs";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CounterSection = () => {
  const [counters, setCounters] = useState({
    beerOrdered: 0,
    happyClients: 0,
    projectsCompleted: 0,
    clientsServed: 0,
  });

  useEffect(() => {
    new WOW.WOW().init();

    const animateCounter = (endValue, speed, key) => {
      let startValue = 0;
      const stepTime = Math.abs(Math.floor(speed / endValue));
      const timer = setInterval(() => {
        startValue++;
        setCounters((prevCounters) => ({
          ...prevCounters,
          [key]: startValue,
        }));
        if (startValue === endValue) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    animateCounter(200, 4000, "beerOrdered");
    animateCounter(90, 4000, "happyClients");
    animateCounter(80, 4000, "projectsCompleted");
    animateCounter(60, 4000, "clientsServed");
  }, []);

  return (
    <section className="wow fadeIn animated" style={{ visibility: "visible", animationName: "fadeIn" }}>
      <div className="container">
        <div className="row">
          {/* Counter 1 */}
          <div className="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated" data-wow-duration="300ms">
            <BiBeer className="medium-icon" />
            <span className="counter timer">{counters.beerOrdered}</span>
            <p className="counter-title">Beer Ordered</p>
          </div>

          {/* Counter 2 */}
          <div className="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated" data-wow-duration="600ms">
            <FaHeart className="medium-icon" />
            <span className="counter timer">{counters.happyClients}</span>
            <p className="counter-title">Happy Clients</p>
          </div>

          {/* Counter 3 */}
          <div className="col-md-3 col-sm-6 bottom-margin-small text-center counter-section wow fadeInUp xs-margin-bottom-ten animated" data-wow-duration="900ms">
            <BiAnchor className="medium-icon" />
            <span className="counter timer">{counters.projectsCompleted}</span>
            <p className="counter-title">Projects Completed</p>
          </div>

          {/* Counter 4 */}
          <div className="col-md-3 col-sm-6 text-center counter-section wow fadeInUp animated" data-wow-duration="1200ms">
            <BiUser className="medium-icon" />
            <span className="counter timer">{counters.clientsServed}</span>
            <p className="counter-title">Clients Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
