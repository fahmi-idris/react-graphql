import React, { Component } from 'react';
import HeaderComponent from './components/header';
import CardWrapper from './components/cardwrapper';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent/>
        <Container>
          <CardWrapper/>
        </Container>
      </div>
    );
  }
}

export default App;
