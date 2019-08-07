import React, { Component } from 'react'
import {Menu, Container, Button} from 'semantic-ui-react'
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../menus/SignedOutMenu';
import SignedInMenu from '../menus/SignedInMenu';

class NavBar extends Component {
    state = {
      authenticated: true
    }

    handleSignIn = () => this.setState({authenticated: true})
    handleSignOut = () => {
      this.setState({authenticated: false})
      this.props.history.push('/')

    }
    render() {
        const {authenticated} = this.state
        return (
                  <Menu inverted fixed="top">
                    <Container>
                      <Menu.Item as={NavLink} exact to='/' header>
                        <img src="assets/logo1.png" alt="logo" />
                        CodeBook
                      </Menu.Item>
                      <Menu.Item as={NavLink} to='/posts' name="Recent Posts" />
                      <Menu.Item as={NavLink} to='/people' name="People" />
                      <Menu.Item>
                        {/* <Button floated="right" content="Create Post" /> */}
                        <Button as={Link} to='/createPost' class="ui inverted animated button large">
                            <div>Post</div>
                        </Button>
                      </Menu.Item>
                      {authenticated ? <SignedInMenu signOut={this.handleSignOut}/> : <SignedOutMenu signIn={this.handleSignIn}/>}
                    </Container>
                  </Menu>
        )
    }
}

export default withRouter(NavBar)
