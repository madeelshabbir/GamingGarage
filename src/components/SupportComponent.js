import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap';
class Support extends Component{
    constructor(props){
        super(props);
        this.state = {
            topic: '',
            email: '',
            details: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
    render(){
        return(
            <Container>
                <Jumbotron style={{marginTop: '20px', marginBottom: '20px'}}>
                    <Row class="row-content">
                        <Col xs={12} style={{textAlign: 'center'}}>
                            <h1>Create a Ticket</h1>
                        </Col>
                    </Row>
                </Jumbotron>
                <Jumbotron style={{marginTop: '20px', marginBottom: '20px'}}>
                    <Row class="row-content">
                        <Col className="col-12 col-md-9">
                            <Form>
                                <FormGroup row style={{marginTop: '20px'}}>
                                    <Label htmlFor="topic" md={2}><h4>Topic:</h4></Label>
                                    <Col md={10}>
                                        <Input type="text" id="topic" name="topic"
                                            placeholder="Enter Topic"
                                            value={this.state.topic}
                                            onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row style={{marginTop: '20px'}}>
                                    <Label htmlFor="email" md={2}><h4>Email:</h4></Label>
                                    <Col md={10}>
                                        <Input type="email" id="email" name="email"
                                            placeholder="Enter Your Email"
                                            value={this.state.email}
                                            onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row style={{marginTop: '20px'}}>
                                    <Label htmlFor="details" md={2}><h4>Details:</h4></Label>
                                    <Col md={10}>
                                        <Input type="textarea" id="details" name="details"
                                            rows="12"
                                            value={this.state.details}
                                            onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 10, offset: 2}}>
                                        <Button type="submit" color="primary">
                                            Submit Ticket
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        );
    }
}

export default Support;