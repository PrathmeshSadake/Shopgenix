import React, { Component } from 'react';
import Header from '../Header/Header.component';
import About from '../About/About.component';
import Footer from '../Footer/Footer.component';

import './App.scss';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <About />

                <Footer/>
            </div>
        )
    }
}
