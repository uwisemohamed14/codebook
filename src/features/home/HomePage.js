import React from 'react'
import {Segment, Container, Header, Image, Button} from 'semantic-ui-react'
const HomePage = ({history}) => {
    return (
            <div>
                <Segment inverted textAlign='center' vertical className='masthead'>
                    <Container text>
                        <Header as='h1' inverted>
                            <Image
                            size='large'
                            src='/assets/logo1.png'
                            alt='logo'
                            style={{ marginBottom: 13 }}
                            />
                            Codebook
                        </Header>
                        <div class="ui horizontal divider">
                            <h5 class="ui small header inverted" style={{ marginBottom: 1 }}>
                            A social media platform to track and review your algorithms
                            </h5>
                            </div>
                        <Button style={{ marginTop: 10 }}onClick={() => history.push('./posts')} size='medium' inverted>
                            Get started
                        </Button> 
                    </Container>
                </Segment>
            </div>
        )
}

export default HomePage
