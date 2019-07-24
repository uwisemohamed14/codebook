import React, { Component } from 'react'
import {Menu, Container, Button} from 'semantic-ui-react'

class NavBar extends Component {
    render() {
        return (
                  <Menu inverted fixed="top">
                    <Container>
                      <Menu.Item header>
                        <img src="assets/logo1.png" alt="logo" />
                        CodeBook
                      </Menu.Item>
                      <Menu.Item name="Recent Posts" />
                      <Menu.Item>
                        {/* <Button floated="right" content="Create Post" /> */}
                        <button class="ui fade inverted animated button large">
                            <div class="hidden content">Post</div>
                            <div class="visible content"><i aria-hidden="true" class="write icon"></i></div>
                        </button>
                      </Menu.Item>
                      <Menu.Item position="right">
                        <Button blue basic inverted content="Login" />
                        <Button blue basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
                      </Menu.Item>
                    </Container>
                  </Menu>
        )
    }
}

export default NavBar;
