import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

function GamesInfo(props){
    return (
        <Container>
            <Row>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active><Link to={`/home/${props.game.id}`}>{props.game.name}</Link></BreadcrumbItem>
                </Breadcrumb>
            </Row>
        </Container>
    );}
export default GamesInfo;