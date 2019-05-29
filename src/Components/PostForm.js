import React, { Component } from 'react';
import { Alert, Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';
import axios from 'axios'

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      requesttype: 'Travel',
      deadlinedate: '',
      description: '',
      formErrors: false,
      loading: false,
      success: false,
      failure: false
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    this.setState({ loading : true })
    this.setState({ success : false })
    this.setState({ failure : false })
    setTimeout(() => {
      axios.post('http://localhost:3001/newuser', this.state)
      .then(response => {
        console.log(response)
        this.setState({ success : true })
      }).catch(error => {
        console.log(error)
        this.setState({ failure : true })
      })
      this.setState({ loading : false })
    }, 3000);
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

    const { id, requesttype, deadlinedate, description, loading, success, failure } = this.state
    return (
      <Form className='mx-5' onSubmit={this.submitHandler}>
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
        <div style={{display: 'flex', height:'2em'}}>
          <Button style={{display: 'flex',}} type="submit" className="mt-auto" color="primary" disabled={loading || success}>Submit</Button>
          <div className="mt-auto" style={{display: 'flex',  marginLeft: '1em', paddingTop: '2px'}}>{ loading && <Spinner color="primary" /> }</div>
          <div className="mt-auto" style={{display: 'flex', height:'4em'}}>{ success && <Alert color="success"> Request Successfully Sent! </Alert>}</div>
          <div className="mt-auto" style={{display: 'flex', height:'4em'}}>{ failure && <Alert color="danger"> Something went wrong... Please Try Again </Alert>}</div>
        </div>

      </Form>
    );
  }
}

export default PostForm