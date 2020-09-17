import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
class Support extends Component{
    constructor(props){
        super(props);
        this.state = {
            topic: '',
            email: '',
            details: '',
            touched: {
                topic: false,
                email: false,
                details: false
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    
    
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate = (topic, email, details) => {
        const errors = {
            topic: '',
            email: '',
            details: ''
        };

        if (this.state.touched.topic && topic.length < 3)
            errors.topic = 'Ticket Topic should be >= 3 characters';
        else if (this.state.touched.topic && topic.length > 20)
            errors.topic = 'Ticket Topic should be <= 20 characters';

        const reg = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        if (this.state.touched.email && !reg.test(email))
            errors.email = 'Email should be in *@*.* format where * means at least one Alphanumeric Character';

        if (this.state.touched.details && details.length < 10)
            errors.details = 'Ticket Details should be >= 10 characters';

        return errors;
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    handleSubmit = (event) => {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render(){
        const errors = this.validate(this.state.topic, this.state.email, this.state.details);
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
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row style={{marginTop: '20px'}}>
                                    <Label htmlFor="topic" md={2}><h4>Topic:</h4></Label>
                                    <Col md={10}>
                                        <Input type="text" id="topic" name="topic"
                                            placeholder="Enter Topic"
                                            value={this.state.topic}
                                            valid={errors.topic === ''}
                                            invalid={errors.topic !== ''}
                                            onBlur={this.handleBlur('topic')}
                                            onChange={this.handleInputChange}/>
                                        <FormFeedback>{errors.topic}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row style={{marginTop: '20px'}}>
                                    <Label htmlFor="email" md={2}><h4>Email:</h4></Label>
                                    <Col md={10}>
                                        <Input type="email" id="email" name="email"
                                            placeholder="Enter Your Email"
                                            value={this.state.email}
                                            valid={errors.email === ''}
                                            invalid={errors.email !== ''}
                                            onBlur={this.handleBlur('email')}
                                            onChange={this.handleInputChange}/>
                                            <FormFeedback>{errors.email}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row style={{marginTop: '20px'}}>
                                    <Label htmlFor="details" md={2}><h4>Details:</h4></Label>
                                    <Col md={10}>
                                        <Input type="textarea" id="details" name="details"
                                            rows="12"
                                            value={this.state.details}
                                            valid={errors.details === ''}
                                            invalid={errors.details !== ''}
                                            onBlur={this.handleBlur('details')}
                                            onChange={this.handleInputChange}/>
                                            <FormFeedback>{errors.details}</FormFeedback>
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