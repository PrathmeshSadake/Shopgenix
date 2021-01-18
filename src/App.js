import React, { useState, useEffect } from 'react';
import './app.css';
import { css } from "@emotion/core";
import HomePage from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/Projects';
import Footer from './components/Footer';

import styled from 'styled-components';


const override = css`
    display: block;
`;

function App(){
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(() => { setLoading(false) }, 4000);
    });

    return(
        <>{
        loading ? 
        <StyledLoaderDiv>
        <ClimbingBoxLoader  color="#4A65F2" css={override} loading={loading}/> 
        </StyledLoaderDiv>:
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
        }
        </>
    );
}

const StyledLoaderDiv = styled.div`
    width: 100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export default App;