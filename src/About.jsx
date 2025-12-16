import React from 'react'

function About() {
  return (
    <>
    <div className='container-fluid mt'>
        <div className="col-lg-12">
            <div className="row d-flex justify-content-center aline-items-center">
                <h1 className='htext fs'>About us</h1>
                <p className=' ' style={{width:'600px'}}>The iPhone 17 series features a significant camera upgrade across all models, integrating 48MP Fusion cameras on both the front and rear systems, along with advanced Apple Intelligence photography features</p>
            </div>
            <div className='row mt-5 mb-5'>
                <div className="col-lg-6">
                    <br />
                    <br />
                    <br />
                    <h1 className='htext text-start fs'>iPhone AIR Information</h1>
                    <p className='text-start'>48MP Main Camera: Features an ƒ/1.6 aperture and sensor-shift optical image stabilization. It captures super-high-resolution 24MP photos by default, a perfect balance of quality and file size. This main camera also enables a 2x optical-quality telephoto zoom option (at 12MP resolution)..</p>
                    <p className='text-start'>48MP Ultra Wide Camera: Offers a 13mm focal length, a 120-degree field of view, and an ƒ/2.2 aperture, providing significantly more detail than previous generations.</p>
                </div>
                <div className="col-lg-6 mb-5 mt-5">
                    <img src={require('./img/i (00).webp')} className="ahome" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About