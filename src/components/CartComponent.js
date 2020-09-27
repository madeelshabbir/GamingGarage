import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
class Cart extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Container>
                <Jumbotron style={{marginTop: '20px', marginBottom: '20px'}}>
                    <Row class="row-content">
                        <Col xs={12} style={{textAlign: 'center'}}>
                            <h1>Your Cart is Empty</h1>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        );
    }
}

export default Cart;