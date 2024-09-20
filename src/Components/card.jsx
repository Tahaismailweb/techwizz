import React from 'react';

export default function Categories() {
  return (
    <div className="container mt-5" data-aos="zoom-in">
      <div className="row align-items-center">
        <div className="col-md-4">
          <div
            className="card additon"
            style={{
              boxShadow: '0px 20px 30px rgba(39, 43, 55, 0.15)',
              width: '24rem',
              borderRadius: '4rem 0 0 5rem',
            }}
          >
            <img
              src="/img/image.jpeg.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body" style={{ textAlign: 'center' }}>
              <h3 className="card-title">COSMETICS</h3>
              <p style={{ textAlign: 'start', color: 'rgb(138, 126, 126)' }}>
                Create a little illusion with
                <br />
                makeup cosmetics
              </p>
              <hr
                style={{ color: '#019ca9', width: '50%', height: '10px' }}
              />
              <p
                style={{
                  color: '#019ca9',
                  textAlign: 'start',
                  fontSize: '20px',
                }}
              >
                50+ products
              </p>
              <a href="/lakme.html">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#019ca9',
                    position: 'absolute',
                    bottom: '0px',
                    right: '0px',
                    color: 'white',
                    fontWeight: 'bolder',
                    fontSize: '24px',
                    borderRadius: '0px',
                  }}
                >
                  <i className="bi bi-arrow-right"></i>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card additon"
            style={{
              boxShadow: '0px 20px 30px rgba(39, 43, 55, 0.15)',
              width: '24rem',
              borderRadius: '4rem 0 0 5rem',
            }}
          >
            <img
              src="/img/image.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body" style={{ textAlign: 'center' }}>
              <h3 className="card-title">SKIN CARE</h3>
              <p
                className="person-text"
                style={{ textAlign: 'start', color: 'rgb(138, 126, 126)' }}
              >
                A unique selection of skincare
                <br />
                cosmetics by famous brands.
              </p>
              <hr
                style={{ color: '#019ca9', width: '50%', height: '10px' }}
              />
              <p
                style={{
                  color: '#019ca9',
                  textAlign: 'start',
                  fontSize: '20px',
                }}
              >
                50+ products
              </p>
              <a href="/garnier.html">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#019ca9',
                    position: 'absolute',
                    bottom: '0px',
                    right: '0px',
                    color: 'white',
                    fontWeight: 'bolder',
                    fontSize: '24px',
                    borderRadius: '0px',
                  }}
                >
                  <i className="bi bi-arrow-right"></i>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card additon"
            style={{
              boxShadow: '0px 20px 30px rgba(39, 43, 55, 0.15)',
              width: '24rem',
              borderRadius: '4rem 0 0 5rem',
            }}
          >
            <img
              src="/img/kitchen.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body" style={{ textAlign: 'center' }}>
              <h3 className="card-title">PERFUMES</h3>
              <p
                className="person-text"
                style={{ textAlign: 'start', color: 'rgb(138, 126, 126)' }}
              >
                A unique selection of skincare
                <br />
                cosmetics by famous brands.
              </p>
              <hr
                style={{ color: '#019ca9', width: '50%', height: '10px' }}
              />
              <p
                style={{
                  color: '#019ca9',
                  textAlign: 'start',
                  fontSize: '20px',
                }}
              >
                50+ products
              </p>
              <a href="/dior.html">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#019ca9',
                    position: 'absolute',
                    bottom: '0px',
                    right: '0px',
                    color: 'white',
                    fontWeight: 'bolder',
                    fontSize: '24px',
                    borderRadius: '0px',
                  }}
                >
                  <i className="bi bi-arrow-right"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
