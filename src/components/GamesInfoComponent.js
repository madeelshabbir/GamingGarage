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
            <Media style={{marginBottom: '10px', padding: '20px', backgroundColor: 'black', color: '#fbff12'}}>
                <div className="col-md-6">
                    <Media object width="100%" src={'../'+this.props.game.src} alt={this.props.game.name}/>                
                </div>
                <Media body className="col-md-auto" style={{paddingTop: '20px'}}>
                    <div>
                        <Media heading>{this.props.game.name}</Media>
                        <p>{this.props.game.price+' pkr'}</p>
                        <Button onClick={ this.addCart }>Add to Cart</Button>
                    </div>
                </Media>
            </Media>
            <div style={{marginBottom: '10px'}} className="embed-responsive embed-responsive-21by9">
                    <iframe className="embed-responsive-item" src={this.props.game.ytsrc} alt={this.props.game.name}></iframe>
            </div>
        </Container>
    );
    }
}
export default GamesInfo;