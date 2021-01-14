import React from 'react';

import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';


function HomePage(){
    return(
        <div>
        <Header/>
        <About/>
        <Services/>
        </div>
    );
}

export default HomePage;