import React, { Component } from 'react'
import { Col, Row, Form, FormGroup, Button, Label, Input, Table } from 'reactstrap'
import ModalExample from './ApproveDenyModal'

const ToApprove = 'https://portlandhr-rest-api.herokuapp.com/requeststoapprove'
//const Denied = 'http://localhost:3001/requestsdenied' 

class Manage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            approvedTable: null,
            isLoaded: false,
            error: null,
            ding: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
    }

    handleChange(event) {
        this.setState({ding: event.target.value});
    }

    handleRefresh(event) {
        this.componentDidMount()
    }

    componentDidMount(){
        setTimeout(() => {
            fetch(ToApprove)
            .then(response => response.json())
            .then(
                (approvedTable) => {
                    this.setState({ 
                        approvedTable: approvedTable, 
                        isLoaded: true,
                    });
                },
                (error) => {
                    this.setState({
                        error,
                        isLoaded: false
                    });
                }
            )
            // fetch(Denied)
            // .then(response => response.json())
            // .then(
            //     (deniedTable) => {
            //         this.setState({ 
            //             deniedTable: deniedTable, 
            //             isLoaded: true 
            //         });
            //     },
            //     (error) => {
            //         this.setState({
            //             error,
            //             isLoaded: false
            //         });
            //     }
            // )
        },
        0);

    }

    render() {

        const { approvedTable, error, isLoaded, ding } = this.state

        if (error) {
            return (
            <div>Error: {error.message}</div>
            )
        }

        else if (!isLoaded) {
            return (
            <React.Fragment>
                {/* <form className="mx-5">
                    <Row className="mt-4">
                        <Col md={2}>
                            <FormGroup>
                                <Label for="RequestId">Request Id</Label>
                                <Input 
                                    type="number" 
                                    name="requestid" 
                                    placeholder={1}
                                    value={ding}
                                    onChange={this.changeHandler}/>
                            </FormGroup>
                        </Col>
                            <Button color="success" className="mx-4" style={{height:'2.5em', marginTop:'2em'}}>Approve</Button>    
                                <div style={{marginTop:'2em'}}>
                                    <ModalExample buttonLabel='Deny'/>
                                </div>
                            <Button color="secondary" className="ml-auto" style={{height:'2.5em', marginTop:'2em'}}>Refresh Table</Button>
                    </Row>
                </form> */}

                <div>Loading...</div>

            </React.Fragment>
            )
        }

        else {
            return(
                <React.Fragment>
                <Form className="mx-5">
                    <Row className="mt-4">
                        <Col md={2}>
                            <FormGroup>
                                <Label for="ding">Request Id</Label>
                                <Input 
                                    type="number" 
                                    name="ding" 
                                    placeholder="Enter number here"
                                    value={ding}
                                    onChange={this.handleChange}/>
                            </FormGroup>
                        </Col>
                            {/* <Button color="success" className="mx-4" style={{height:'2.5em', marginTop:'2em'}}>Approve</Button>   */}
                                <div className="mx-3" style={{marginTop:'2em'}}>
                                    <ModalExample buttonLabel='Approve' color='success' modalTitle='Approve this request?' type='number' placeholder='Estimated Cost...' requestid={this.state.ding}/>
                                </div>  
                                <div style={{marginTop:'2em'}}>
                                    <ModalExample buttonLabel='Deny' color='danger' modalTitle='Deny Request?' type='text' placeholder='Reason for Denial...' requestid={this.state.ding}/>
                                </div>
                            <Button color="secondary" className="ml-auto" style={{height:'2.5em', marginTop:'2em'}} onClick={this.handleRefresh}>Refresh Table</Button>
                    </Row>
                </Form>
                    <br/>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>request id</th>
                                <th>employee id</th>
                                <th>type id</th>
                                <th>submission date</th>
                                <th>deadline date</th>
                                <th>description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {approvedTable.map((requestDetail, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index}</th>
                                        <td>{requestDetail.requestform_id}</td>
                                        <td>{requestDetail.employee_id}</td>
                                        <td>{requestDetail.type_id}</td>
                                        <td>{requestDetail.submissiondate}</td>
                                        <td>{requestDetail.deadlinedate}</td>
                                        <td>{requestDetail.description}</td>
                                    </tr>   
                                )      
                            })}
                        </tbody>
                    </Table>
                </React.Fragment>
            );

        }


    }


}

export default Manage