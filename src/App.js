import React from 'react';
import './app.css';
import HomePage from './pages/Home';
import { Switch, Route } from 'react-router-dom';

import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/Projects';
import Footer from './components/Footer';

function App(){
    return(
        <div>
            <Switch>
                <Route exact path='/'>
            <HomePage/>
                </Route>
                <Route path='/projects'>
            <ProjectsPage/>
                </Route>
                <Route path='/contact'>
            <ContactPage/>
                </Route>
            </Switch>
        <Footer/>
        </div>
    );
}

export default App;