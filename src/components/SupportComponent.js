import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Form, FormGroup, Label, Button } from 'reactstrap';
import { Control, LocalForm, Error } from 'react-redux-form';
class Support extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (values) => {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
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
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group" style={{marginTop: '20px'}}>
                                    <Label htmlFor="topic" md={2}><h4>Topic:</h4></Label>
                                    <Col md={10}>
                                        <Control.text model=".topic" id="topic" name="topic"
                                            placeholder="Enter Topic"
                                            className="form-control"/>
                                    </Col>
                                </Row>
                                <Row className="form-group" style={{marginTop: '20px'}}>
                                    <Label htmlFor="email" md={2}><h4>Email:</h4></Label>
                                    <Col md={10}>
                                        <Control.text model=".email" id="email" name="email"
                                            placeholder="Enter Your Email"
                                            className="form-control"/>
                                    </Col>
                                </Row>
                                <Row className="form-group" style={{marginTop: '20px'}}>
                                    <Label htmlFor="details" md={2}><h4>Details:</h4></Label>
                                    <Col md={10}>
                                        <Control.textarea model=".details" id="details" name="details"
                                            rows="12"
                                            className="form-control"/>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 10, offset: 2}}>
                                        <Button type="submit" color="primary">
                                            Submit Ticket
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        );
    }
}

export default Support;