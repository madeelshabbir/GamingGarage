import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Form, FormGroup, Label, Button } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
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
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(2), minLength: minLength(50)
                                            }}/>
                                        <Errors
                                            className="text-danger"
                                            model=".topic"
                                            show="touched"
                                            messages={{
                                                required: 'Required! ',
                                                minLength: 'Must be greater than 1 characters',
                                                maxLength: 'Must be 50 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group" style={{marginTop: '20px'}}>
                                    <Label htmlFor="email" md={2}><h4>Email:</h4></Label>
                                    <Col md={10}>
                                        <Control.text model=".email" id="email" name="email"
                                            placeholder="Enter Your Email"
                                            className="form-control"
                                            validators={{
                                                required, validEmail
                                            }}/>
                                            <Errors
                                                className="text-danger"
                                                model=".email"
                                                show="touched"
                                                messages={{
                                                    required: 'Required! ',
                                                    validEmail: 'Invalid Email Address'
                                            }}
                                            />
                                    </Col>
                                </Row>
                                <Row className="form-group" style={{marginTop: '20px'}}>
                                    <Label htmlFor="details" md={2}><h4>Details:</h4></Label>
                                    <Col md={10}>
                                        <Control.textarea model=".details" id="details" name="details"
                                            rows="12"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(5), minLength: minLength(500)
                                            }}/>
                                            <Errors
                                                className="text-danger"
                                                model=".details"
                                                show="touched"
                                                messages={{
                                                    required: 'Required! ',
                                                    minLength: 'Must be greater than 4 characters',
                                                    maxLength: 'Must be 500 characters or less'
                                            }}
                                            />
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