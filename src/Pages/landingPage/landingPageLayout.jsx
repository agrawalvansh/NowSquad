import React from 'react';
import Footer from './Footer';
import Header from './Header';
import LandingPage from './LandingPage';
import FAQs from './FAQs';
import About from './About';
import Achievement from './Achievement';
function landingPageLayout() {
    return (
        <>
            <Header />
            <div id="Home">
              <LandingPage />
            </div>
            <div id="About">
              <About />
            </div>
            <div id="Achievement">
              <Achievement />
            </div>
            <div id="FAQs">
              <FAQs />
            </div>
            <Footer />
        </>
    );

}

export default landingPageLayout;