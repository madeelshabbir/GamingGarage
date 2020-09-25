import React, { Component } from 'react';
import { Container, Carousel, CarouselItem, CarouselControl,  CarouselIndicators, Card, CardTitle, CardSubtitle, CardImg, CardBody, Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

class Home extends Component{
    constructor(props){
        super(props);
        this.state= {
            activeIndex: 0
        };
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
    }
    previous = () => {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? this.props.games.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
    next = () => {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === this.props.games.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
    goToIndex = (newIndex) => {
      if (this.state.animating) return;
      this.setState({ activeIndex: newIndex });
    }
    gameCard = (game, isLoading, errMsg) => {
      if (isLoading)
          return(
                <Loading />
          );
      else if (errMsg)
          return(
                  <h4>{errMsg}</h4>
          );
      else 
      return(
        <Card>
            <Link className="link" to={`/home/${game.id}`}>
            <CardImg width="100%" src={baseUrl + game.src} alt={game.name} />
              <CardBody>
                <CardTitle style={{textAlign: 'center'}}>{game.name}</CardTitle>
              </CardBody>
            </Link>
        </Card>);
    }
    caroCard = (game, isLoading, errMsg) => {
      if (isLoading)
          return(
                <Loading />
          );
      else if (errMsg)
          return(
                  <h4>{errMsg}</h4>
          );
      else 
      return(
        <Card>
          <Link className="link" to={`/home/${game.id}`}>
            <CardImg width="100%" src={baseUrl + game.src} alt={game.name} />
            <CardBody>
              <CardTitle>{game.name}</CardTitle>
              <CardSubtitle>{game.price+' pkr'}</CardSubtitle>
            </CardBody>
          </Link>
        </Card>
      );
    }
    render(){
      const slides = this.props.games.map((game) => {
        return (
          <CarouselItem
            onExiting={() => {
              this.animating = true;
            }}
            onExited={() =>{
              this.animating = false;
            }}
            key={game.src}
          >
          {this.caroCard(game, this.props.isLoading, this.props.errMsg)}
          </CarouselItem>
        );
      });
      const tiles = this.props.games.map((game) => {
        return(
          <Container className="col-md-3 col-sm-6">
            {this.gameCard(game, this.props.isLoading, this.props.errMsg)}
          </Container>
        );
      });
      return(
            <React.Fragment>
              <Container>
                <Row>
                  <Breadcrumb>
                    <BreadcrumbItem><Link style={{color: '#0C0F0A'}} to="/home">Home</Link></BreadcrumbItem>
                  </Breadcrumb>
                </Row>
                <Carousel
                    activeIndex={this.state.activeIndex}
                    next={this.next}
                    previous={this.previous}
                  >
                    <CarouselIndicators items={this.props.games} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
                      {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                  </Carousel>
                <Row className="tiles">
                  {tiles}
                </Row>
              </Container>
            </React.Fragment>
        );
    }
}

export default Home;