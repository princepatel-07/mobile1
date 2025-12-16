import React from "react";
import Button from "react-bootstrap/Button";

function Footer() {
  return (
    
    <footer className="bg-dark text-white text-lg-start py-5"> 
      <div className="container">
        <div className="row text-center text-lg-start">
          {/* Left Side */}
          <div className="col-lg-6 mb-4">
            <h1 className="htext">IPHONE</h1>
            <h2 className="hptext">iphone 17</h2>
            <p className="mt-4">With us you will build your better future</p>
            <p>
              <a href="mailto:contact@estateagency.com" className="text-decoration-underline text-white">
                contact@iPhone123.com
              </a>
            </p>
            <p>
              <a href="tel:+48111222333" className="text-decoration-underline text-white">
                +48 111 222 333
              </a>
            </p>

            <div className="row mt-4">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white">Home</a></li>
                  <li><a href="#" className="text-white">About us</a></li>
                  <li><a href="#" className="text-white">Blog</a></li>
                  <li><a href="#" className="text-white">Contact</a></li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white">Facebook</a></li>
                  <li><a href="#" className="text-white">Instagram</a></li>
                  <li><a href="#" className="text-white">LinkedIn</a></li>
                  <li><a href="#" className="text-white">Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6 mb-4">
            <p>Want to contact with us? Leave your number and we will call you soon.</p>
            <div className="d-flex mb-3">
              <input
                type="text"
                className="form-control me-2"
                placeholder="e.g. 111-222-333"
                aria-label="Your phone number"
              />
              <Button variant="light">Send</Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-3 border-top border-secondary mt-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} iphone 17 pro max.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
