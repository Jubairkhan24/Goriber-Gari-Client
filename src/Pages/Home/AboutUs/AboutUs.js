import React from 'react';
import aboutUsBackground from '../../../images/products/aboutus.jpg'
import './AboutUs.css'

// const aboutUs = {

//     backgroundColor: '#0F8C9C',

//     marginTop: 175
// }

const AboutUs = () => {
    return (
        <div className="container mt-5">
            <div>
                <div className="my-5 aboutUs">
                    <h1>About Us</h1>
                </div>
                <div className="row mt-5 ">
                    <div className="col-lg-6 col-sm-12">
                        <img
                            className="img-fluid"
                            src={aboutUsBackground} alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-12 common-background-color aboutUs">
                        <h4 className="text-center my-5">Hey This is  </h4>
                        <h4 className="text-center fw-bolder">Goriber Garir Garage</h4>
                        <p>Here you can buy refurbished or 2nd hand famous sports cars at cheap price also free 1 years service warrenty will be provided. So grab the opportunity and be the owner of sports cars </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AboutUs;