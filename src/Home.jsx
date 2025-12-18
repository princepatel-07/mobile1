import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function Home() {
  return (
    <div>
      <div className="container-fluid homt">
        <div className="col-lg 12">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="hotext">IPHONE </h1>
              <h2 className="hotext">iphone 17 pro</h2>
              <p className="hoptext">
                Rear Cameras: The standard iPhone 17 features a 48MP Dual Fusion main camera a
                nd a 48MP Ultra Wide camera, providing 2x optical-quality t
                elephoto zoom capabilities.
              </p>
              <p className="hoptext">
               Front Camera: The front-facing camera is now an 18MP sensor with Center Stage technology, which uses a square sensor to allow for portrait or landscape selfies without rotating the phone.
                more.
              </p>
              {/* <Button variant="outline-dark" className="hobutton">
                About us
              </Button> */}
            </div>
            <div className="col-lg-6">
              <div className="Hero">
                <img src={require('./img/i (3).webp')} class="img-fluid" alt="" />
                <img src={require('./img/i (4).webp')} class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid hoslid">
        <div className="row">
          <div className="col-lg-6">
            <Card className="text-center border-0">
              <Card.Header className="bg-white ">
                {" "}
                <h1 className="htext">iPhone 17 Camera Highlights</h1>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <span className="htext">20 sep 2025</span>
                </Card.Title>
                <Card.Text>
                  <img
                    src={require("./img/i (1).webp")}
                    className="hoslid1"
                  />
                </Card.Text>
                <Card.Footer className="text-muted bg-white">
                   Rear Cameras: The standard iPhone 17 features a 48MP Dual Fusion main camera a
                nd a 48MP Ultra Wide camera, providing 2x optical-quality t
                elephoto zoom capabilities.
                </Card.Footer>
                <Card.Footer className=" bg-white fw-bold">
                  Read more
                </Card.Footer>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-6">
            <Card className="text-center border-0">
              <Card.Header className="bg-white ">
                {" "}
                <h1 className="htext">General Photography Features</h1>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <span className="htext">7 sep 2025</span>
                </Card.Title>
                <Card.Text>
                  <img
                    src={require("./img/i (2).webp")}
                    className="hoslid1"
                  />
                </Card.Text>
                <Card.Footer className="text-muted bg-white">
                   Front Camera: The front-facing camera is now an 18MP sensor with Center Stage technology, which uses a square sensor to allow for portrait or landscape selfies without rotating the phone..
                </Card.Footer>
                <Card.Footer className=" bg-white fw-bold ">
                  Read more
                </Card.Footer>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
