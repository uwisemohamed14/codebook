import React, { Component } from 'react'
import {Segment, Form, Button} from 'semantic-ui-react'

class PostForm extends Component {
    state= {
      title: "",
      date: "",
      city: "",
      venue: "",
      hostedBy: ""

    }
    componentDidMount() {
      if(this.props.selectedPost !== null) {
        this.setState({
          ...this.props.selectedPost
        })
      }
    }
    handleFormSubmit = (evt) => {
      evt.preventDefault()
      if(this.state.id){
        this.props.updatePost(this.state)
      }
      else {
        this.props.createPost(this.state)
      }
    }

    handleInputChange = (evt) => {
      this.setState({
        [evt.target.name]: evt.target.value
      })
    }
    render() {
        const {cancelFormButton} = this.props
        const {title, date, city, venue, hostedBy } = this.state
        return (
                  <Segment>
                    <Form onSubmit={this.handleFormSubmit} autoComplete="off">
                      <Form.Field>
                        <label>Event Title</label>
                        <input 
                          name="title"
                          onChange={this.handleInputChange} 
                          value={title} 
                          placeholder="Event Title" />
                      </Form.Field>
                      <Form.Field>
                        <label>Event Date</label>
                        <input name="date"
                          onChange={this.handleInputChange} 
                          value={date} type="date" placeholder="Event Date" />
                      </Form.Field>
                      <Form.Field>
                        <label>City</label>
                        <input name="city"
                          onChange={this.handleInputChange} 
                          value={city} placeholder="City event is taking place" />
                      </Form.Field>
                      <Form.Field>
                        <label>Venue</label>
                        <input name="venue"
                          onChange={this.handleInputChange} 
                          value={venue} placeholder="Enter the Venue of the event" />
                      </Form.Field>
                      <Form.Field>
                        <label>Hosted By</label>
                        <input name="hostedBy"
                          onChange={this.handleInputChange} 
                          value={hostedBy} placeholder="Enter the name of person hosting" />
                      </Form.Field>
                      <Button positive type="submit">
                        Submit
                      </Button>
                      <Button onClick={cancelFormButton} type="button">Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}

export default PostForm;
