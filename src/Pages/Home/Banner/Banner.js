import React from 'react';
import { useHistory } from 'react-router';
import './Banner.css'

const Banner = () => {

    const history = useHistory();

    const exploreButton = () => {
        history.push('./exploreItems');
    }

    return (
        <div>
            <div className="background-banner img-fluid">
                <div className=" container home-text-style">
                    <h2 className="d-flex text-start">Welcome to the </h2>
                    <h1 className="d-flex text-start fw-bolder fs-1 common-color-theme">Goriber Garir Garage</h1>
                    <h2 className="d-flex text-start fw-bolder fs-1">Here You Can buy Luxurious Car</h2>
                    <h3 className="d-flex text-start fw-bolder fs-1 common-color-theme">At a Cheap Price</h3>
                </div>
                <div className="py-5 container d-flex justify-content-start">
                    <button onClick={exploreButton} className=" btn-design-banner btn btn-lg">Explore Garage</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;