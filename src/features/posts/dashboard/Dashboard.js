import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import PostList from '../postlist/PostList';
import PostForm from '../postform/PostForm';
import cuid from 'cuid';


const postsDash = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
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
    date: '2018-03-28',
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
        isOpen: false,
        selectedPost: null
    }

    // handleIsOpenToggle = () => {
    //     this.setState(({isOpen}) => ({
    //         isOpen: !isOpen
    //     }))       
    // }

    handleCreateFormOpen = () => {
      this.setState({
        isOpen: true,
        selectedPost: null
      })
    }

    handleCreateFormCancel = () => {
      this.setState({
        isOpen: false
      })
    }

    handleCreatePost = (newPost) => {
        newPost.id=cuid();
        newPost.hostPhotoURL= "/assets/user.png"
        this.setState(({posts, isOpen}) => ({
          posts: [...posts, newPost],  //events is destructured from the state at top. Spread opperator ..., creates a new array with all the previous events
          isOpen: false
        }))
    }

    handleSelectedPost = (post) => {
      this.setState({
        selectedPost: post,
        isOpen: true
      })
    }

    handleUpdatePost = (updatedPost) => {
      this.setState(({posts}) => ({
        posts: posts.map(post => {
          if(post.id === updatedPost.id) {
            return {...updatedPost}
          }
          else {
            return post
          }
        }),
        isOpen: false,
        selectedPost: null
      }))
    }

    handleDeletePost = (id) => {
      this.setState(({posts}) => ({
        posts: posts.filter(p => p.id!==id)
      }))
    }

    
    render() {
        const { posts, isOpen, selectedPost } = this.state
        return (
                <Grid>
                    <Grid.Column width={10}>
                        <PostList 
                        posts={posts} 
                        deletePost={this.handleDeletePost} 
                        selectPost={this.handleSelectedPost} />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <button onClick={this.handleCreateFormOpen} class="ui fade animated button blue large">
                            <div class="visible content">Create Post</div>
                            <div class="hidden content"><i aria-hidden="true" class="write icon"></i></div>
                        </button>
                        {isOpen && <PostForm 
                        key= {selectedPost ? selectedPost.id : 0} 
                        updatePost={this.handleUpdatePost}
                        selectedPost={selectedPost} 
                        createPost={this.handleCreatePost} 
                        cancelFormButton={this.handleCreateFormCancel} /> }
                        
                    </Grid.Column>
                </Grid>
        )
    }
}

export default Dashboard;
