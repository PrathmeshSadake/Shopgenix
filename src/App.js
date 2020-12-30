import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';

// Pages
import AboutPage from './pages/AboutPage';

import { Switch, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';

const App = () => {
    return(
        <div className="App">
            <GlobalStyle/>
            <Nav/>
            <Switch>

            <Route path="/" exact>
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