import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';

// Pages
import HomePage from './pages/HomePage';

import { Switch, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

const App = () => {
    return(
        <div className="App">
            <GlobalStyle/>
            <Nav/>
            <Switch>
            <Route path="/" exact>
            <HomePage />
            </Route>
            <Route path="/about">
            <AboutPage />
            </Route>
            <Route path="/contact">
            <ContactPage />
            </Route>
            </Switch>

        </div>
    );
}

export default App;