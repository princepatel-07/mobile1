import React from "react";
import myvideo from "./video/homesvi.mp4";
function Homes() {
  return (
    <div>
      <div className="container-fluid mt">
        <div className="col-lg-12">
          <div className="row d-flex justify-content-center aline-items-center">
            <h1 className="htext fs">Home</h1>
            <p className=" " style={{ width: "600px" }}>
              This is a text element. Double-click this element to edit the
              text. You can also freely change the size and position of this
              element and any parameters including background, border and more.
            </p>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-lg-6">
              <h1 className="htext text-start fs">What we do?</h1>
              <p className="text-start">
                This is a text element. Double-click this element to edit the
                text. You can also freely change the size and position of this
                element and any parameters including background, border and
                more. You can also set an animation to the text element, so that
                when the user of the page displays it on the screen, it will
                show up with the selected effect.
              </p>
              <p className="text-start">
                This is a text element. Double-click this element to edit the
                text. You can also freely change the size and position of this
                element and any parameters including background, border and
                more. You can also set an animation to the text element, so that
                when the user of the page displays it on the screen, it will
                show up with the selected effect.
              </p>
            </div>
            <div className="col-lg-6 mb-5 mt-5">
              {/* <video loop="true" muted="true" data-autoplay="true" playsinline="true" style={{display:'block'}}><source src={} type="video/mp4" /></video> */}

              <video
                width="100%"
                height="360"
                controls
                autoPlay
                muted
                playsInline
                  loop 
              >
                <source src={myvideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homes;
