import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Row, Media, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

class GamesInfo extends Component{
    gameMedia = (game) => {
        return(
            <Media style={{marginBottom: '10px', padding: '20px', backgroundColor: 'black', color: '#fbff12'}}>
                <div className="col-md-6">
                    <Media object width="100%" src={baseUrl + game.src} alt={game.name}/>                
                </div>
                <Media body className="col-md-auto" style={{paddingTop: '20px'}}>
                    <div>
                        <Media heading>{game.name}</Media>
                        <p>{game.price+' pkr'}</p>
                        <Button>Add to Cart</Button>
                    </div>
                </Media>
            </Media>
        );
    }
    videoMedia = (game) => {
        return(
            <div style={{marginBottom: '10px'}} className="embed-responsive embed-responsive-21by9">
                <iframe className="embed-responsive-item" src={game.ytsrc} alt={game.name} title={game.name}/>
            </div>
        )
    }
    render(){
        if (this.props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.errMsg) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{this.props.errMsg}</h4>
                    </div>
                </div>
            );
        }
        else if(this.props.game != null)
        return (
            <Container>
                <Row>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active><Link to={`/home/${this.props.game.id}`}>{this.props.game.name}</Link></BreadcrumbItem>
                    </Breadcrumb>
                </Row>
                {this.gameMedia(this.props.game, this.props.isLoading, this.props.errMsg)}
                {this.videoMedia(this.props.game, this.props.isLoading, this.props.errMsg)}
            </Container>
        );
        else  return(<React.Fragment></React.Fragment>);
    }
}
export default GamesInfo;