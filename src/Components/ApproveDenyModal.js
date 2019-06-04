import React from 'react';
import { Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalTitle: '',
      buttonLabel: this.props.buttonLabel,
      color: '',
      type: '',
      placeholder: '',
      reason: '',
      requestid: ''
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    console.log(this.state)
  }

  handleClick(event){
    this.state.requestid = this.props.requestid
    //this.setState({ requestid : this.props.requestid })
    event.preventDefault()
    console.log(this.state)
    const uri = `http://localhost:3001/updaterequest/${this.state.requestid}`
    setTimeout(() => {
      axios.post(uri, this.state)
      .then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    }, 0);

    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {

    const { reason } = this.state

    return (
      <div>
        <Button color={this.props.color} onClick={this.toggle}>{this.props.buttonLabel}</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>{this.props.modalTitle}</ModalHeader>
              <ModalBody>
                <Input 
                  name="reason" 
                  type={this.props.type} 
                  placeholder={this.props.placeholder} 
                  value={reason}
                  onChange={this.handleChange} 
                  rows={1}/>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.handleClick}>Confirm</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
      </div>
    );
  }
}

export default ModalExample;