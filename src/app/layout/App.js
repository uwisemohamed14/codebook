import React, {Component, Fragment} from 'react';
import Dashboard from '../../features/posts/dashboard/Dashboard';
import NavBar from '../../features/nav/navbar/NavBar';
import { Container } from 'semantic-ui-react';



class App extends Component {
  render(){
    return (
      <Fragment>
        <NavBar />
        <Container className="main">
          <Dashboard />
        </Container>
      </Fragment>
    );
  }
}

export default App;
