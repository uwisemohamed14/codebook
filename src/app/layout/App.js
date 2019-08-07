import React, {Component, Fragment} from 'react';
import Dashboard from '../../features/posts/dashboard/Dashboard';
import NavBar from '../../features/nav/navbar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router';
import HomePage from '../../features/home/HomePage';
import PostDetailedPage from '../../features/posts/postdetailed/PostDetailedPage';
import PeopleDashboard from '../../features/user/peopledashboard/PeopleDashboard';
import SettingsDashboard from '../../features/user/settings/SettingsDashboard';
import UserDetailedPage from '../../features/user/userdetailed/UserDetailedPage';
import PostForm from '../../features/posts/postform/PostForm';



class App extends Component {
  render(){
    return (
    <Fragment>
      <Route exact path='/' component={HomePage}/>
      <Route path='/(.+)' render={()=> (
        <Fragment>
        <NavBar />
        <Container className="main">
            <Route path='/posts' component={Dashboard}/>
            <Route path='/events/:id' component={PostDetailedPage}/>
            <Route path='/people' component={PeopleDashboard}/>
            <Route path='/profile/:id' component={UserDetailedPage}/>
            <Route path='/settings' component={SettingsDashboard}/>
            <Route path='/createPost' component={PostForm}/>
        </Container>
      </Fragment>
      )}
      />
    </Fragment>
      
    );
  }
}

export default App;
