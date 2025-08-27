import React from 'react';
import Footer from './Footer';
import Header from './Header';
import LandingPage from './LandingPage';
import FAQs from './FAQs';
import About from './About';
import Team from './Team';
function landingPageLayout() {
    return (
        <>
            <Header />
            <LandingPage />
            <About />
            <FAQs />
            <Team />
            <Footer />
        </>
    );

}

export default landingPageLayout;