import React, { Component, Fragment } from 'react'
import PostListItem from './PostListItem';

class PostList extends Component {
    render() {
        return (
            <Fragment>
                {this.props.events.map(event => (
                    <PostListItem key={event.id} event={event}/>
                ))}
                
            </Fragment>
        )
    }
}

export default PostList