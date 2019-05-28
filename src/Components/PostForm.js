import React, { Component } from 'react';
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'

// class Alert extends Component {
//   constructor(props){
//     super(props)

//     this.state = {
//       visible: true
//     }
//   }
  
// }

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      requesttype: 'Travel',
      deadlinedate: '',
      description: '',
      formErrors: {id: '', deadlinedate: ''},
      idValid: false,
      deadlinedateValid: false
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)

    axios.post('http://localhost:3001/newuser', this.state)
    .then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }

  // handleSubmit = async e => {
  //   e.preventDefault();
  //   const response = await fetch('/api/world', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ post: this.state.post }),
  //   });
  //   const body = await response.text();
  //   this.setState({ responseToPost: body });
  // };

  render() {
    const { id, requesttype, deadlinedate, description } = this.state
    return (
      <Form className='mx-5' onSubmit={this.submitHandler}>
      {this.state.error && <Alert text={this.state.error} />}
      <h3 className='mt-3'>Request Application</h3>
        <FormGroup>
          <Label for="id">Employee ID</Label>
          <Input 
            type="number" 
            name="id" 
            placeholder="Enter your ID Here"
            value={id}
            onChange={this.changeHandler}/>
        </FormGroup>
        {/* <FormGroup>
          <Label for="FirstName">First Name</Label>
          <Input 
            type="text" 
            name="firstname" 
            placeholder="First Name" 
            value={firstname}
            onChange={this.changeHandler}/>
        </FormGroup>
        <FormGroup>
          <Label for="LastName">Last Name</Label>
          <Input 
            type="text" 
            name="lastname" 
            placeholder="Last Name" 
            value={lastname}
            onChange={this.changeHandler}/>
        </FormGroup> */}
        <FormGroup>
          <Label for="RequestType">Request</Label>
          <Input 
            type="select" 
            name="requesttype" 
            value={requesttype}
            onChange={this.changeHandler}>
            <option>Travel</option>
            <option>Non-Travel</option>
            <option>Mass Expense</option>
          </Input>
        </FormGroup>
        <FormGroup>
        <Label for="deadlinedate">Deadline</Label>
          <Input
            type="date"
            name="deadlinedate"
            placeholder="date placeholder"
            value={deadlinedate}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Description</Label>
          <Input 
            type="textarea" 
            name="description" 
            placeholder="Enter a short description of the request" 
            value={description}
            onChange={this.changeHandler}/>
        </FormGroup>
        {/* <FormGroup check>
          <Label check>
            <Input type="checkbox" />{'I hereby sign away my soul'}
          </Label>
        </FormGroup> */}
        <Button type="submit" className="mt-4" color="primary">Submit</Button>
      </Form>
    );
  }
}

export default PostForm