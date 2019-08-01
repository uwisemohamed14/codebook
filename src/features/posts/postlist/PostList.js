import React, { Component, Fragment } from 'react';
import PostListItem from './PostListItem';

class PostList extends Component {
    render() {
        const {posts, selectPost, deletePost} = this.props
        return (
            <Fragment>
                {posts.map(post => (
                    <PostListItem key={post.id} post={post} selectPost={selectPost} deletePost={deletePost} />
                ))}
                
            </Fragment>
        )
    }
}

export default PostList;