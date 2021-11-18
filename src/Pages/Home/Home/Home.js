import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Reviews from '../../Shared/Reviews/Reviews';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;