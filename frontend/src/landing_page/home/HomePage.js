import React from 'react';
import Hero from './Hero';
import Awards from './Awards'
import States from './States'
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';


import Footer from '../Footer';
function HomePage() {
    return (  
       <>
       
       <Hero />
       <Awards />
       <States />
       <Pricing />
       <Education />
       <OpenAccount />
       <Footer />
       </>
    );
}

export default HomePage;