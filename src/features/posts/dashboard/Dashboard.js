import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import PostList from '../postlist/PostList';
import PostForm from '../postform/PostForm';
import cuid from 'cuid';

const postsDash = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]

class Dashboard extends Component {
    state = {
        posts: postsDash,
        isOpen: false
    }

    handleIsOpenToggle = () => {
        this.setState(({isOpen}) => ({
            isOpen: !isOpen
        }))       
    }

    handleCreatePost = (newPost) => {
        newPost.id=cuid();
        newPost.hostPhotoURL= "/assets/user.png"
        this.setState(({posts, isOpen}) => ({
          posts: [...posts, newPost],  //events is destructured from the state at top. Spread opperator ..., creates a new array with all the previous events
          isOpen: false
        }))
    }
    render() {
        const { posts, isOpen } = this.state
        return (
                <Grid>
                    <Grid.Column width={10}>
                        <PostList posts={posts}/>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <button onClick={this.handleIsOpenToggle} class="ui fade animated button blue large">
                            <div class="visible content">Create Post</div>
                            <div class="hidden content"><i aria-hidden="true" class="write icon"></i></div>
                        </button>
                        {isOpen && <PostForm createPost={this.handleCreatePost} cancelFormButton={this.handleIsOpenToggle} /> }
                        
                    </Grid.Column>
                </Grid>
        )
    }
}

export default Dashboard;
