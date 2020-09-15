import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Container, Row, Media, Button, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

class GamesInfo extends Component{
    constructor(props){
        super(props);
    }

    render(){
    return (
        <Container>
            <Row>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active><Link to={`/home/${this.props.game.id}`}>{this.props.game.name}</Link></BreadcrumbItem>
                </Breadcrumb>
            </Row>
            <Media style={{marginBottom: '10px', padding: '10px', backgroundColor: 'black', color: '#fbff12'}}>
                <div className="col-md-6">
                    <Media object src={'../'+this.props.game.src}/>                
                </div>
                <Media body style={{paddingTop: '20px'}}>
                    <div className="col-md-auto">
                        <Media heading>{this.props.game.name}</Media>
                        <p>{this.props.game.price+' pkr'}</p>
                        <Button onClick={ this.addCart }>Add to Cart</Button>
                    </div>
                </Media>
            </Media>
        </Container>
    );
    }
}
export default GamesInfo;