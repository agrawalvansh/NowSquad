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
            <div id="Home">
              <LandingPage />
            </div>
            <div id="About">
              <About />
            </div>
            <div id="FAQs">
              <FAQs />
            </div>
            <div id="Team">
              <Team />
            </div>
            <Footer />
        </>
    );

}

export default landingPageLayout;