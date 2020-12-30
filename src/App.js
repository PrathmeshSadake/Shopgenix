import React from 'react';
// import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';

// Pages
import AboutPage from './pages/AboutPage';

const App = () => {
    return(
        <div className="App">
            {/* <GlobalStyle/> */}
            <Nav/>
            <AboutPage/>
        </div>
    );
}

export default App;