import React, { Component } from 'react';
import {Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import PostListLikes from './PostListLikes';
class PostListItem extends Component {
    render() {
        const {post} = this.props
        return (    
                     <Segment.Group>
                        <Segment>
                          <Item.Group>
                            <Item>
                              <Item.Image size="tiny" circular src={post.hostPhotoURL} />
                              <Item.Content>
                                <Item.Header as="a">{post.title}</Item.Header>
                                <Item.Description>
                                  Hosted by {post.hostedBy}
                                </Item.Description>
                              </Item.Content>
                            </Item>
                          </Item.Group>
                        </Segment>
                        <Segment>
                          <span>
                            <Icon name="clock" /> {post.date} |
                            <Icon name="marker" /> {post.venue}
                          </span>
                        </Segment>
                        <Segment secondary>
                          <List horizontal>
                            {/* todo: attendees go here */}
                            {post.attendees && post.attendees.map(attendee => (
                                <PostListLikes key={attendee.id} attendee={attendee}/>
                            ))}
                          </List>
                        </Segment>
                        <Segment clearing>
                          <span>{post.description}</span>
                          <Button as="a" color="blue" floated="right" content="View" />
                        </Segment>
                      </Segment.Group>
                    
        )
    }
}

export default PostListItem;