import React, {Component} from 'react';
import Navbar from './navbar';
import Container from './container';

class App extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Container/>
            </div>
        )
    }
}

export default App;