import React, { Component } from 'react';

import Header from './components/Header/Header';

import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            userData : null,
        }
    }

    getData = () => {
        fetch('resume.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            return response.json();
          })
          .then((resumeJson)=>{
              this.setState({
                  userData : resumeJson,
              })
            // console.log(resumeJson)
          });
      }

    componentDidMount(){
        this.getData();
    }

    render(){
        return(
            <div>
                <Header />
            </div>
        )
    }
}

export default App;