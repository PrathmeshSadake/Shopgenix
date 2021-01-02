import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';

// Pages
import HomePage from './pages/HomePage';

import { Switch, Route, useLocation } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';

import { AnimatePresence } from 'framer-motion';


const App = () => {
    //Todo: for key of page
    const location = useLocation();
    return(
        <div className="App">
            <GlobalStyle/>
            <Nav/>
            <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
            <HomePage />
            </Route>
            <Route path="/about">
            <AboutPage />
            </Route>
            <Route path="/projects">
            <ProjectsPage />
            </Route>
            <Route path="/contact">
            <ContactPage />
            </Route>
            </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;