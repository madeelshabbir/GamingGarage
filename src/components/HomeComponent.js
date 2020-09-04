import React, { Component } from 'react';
import { Container, Carousel, CarouselItem, CarouselControl,  CarouselIndicators, Card, CardTitle, CardSubtitle, CardImg, CardBody, Row, Col} from 'reactstrap';
class Home extends Component{
    constructor(props){
        super(props);
        this.state= {
            games: [
                {
                  src: 'assets/images/fallguys.jpg',
                  name: 'Fall Guys',
                  price: '1200 PKR'
                },
                {
                  src: 'assets/images/codbo3.jpg',
                  name: 'COD Black Ops 3',
                  price: '3000 PKR'
                },
                {
                  src: 'assets/images/gta5.jpg',
                  name: 'Grand Theft Auto 5',
                  price: '1900 PKR'
                },
                {
                  src: 'assets/images/rdr2.jpg',
                  name: 'Red Dead Redemption 2',
                  price: '5500 PKR'
                },
                {
                  src: 'assets/images/r6s.jpg',
                  name: 'Rainbow Six Siege',
                  price: '1900 PKR'
                },
                {
                  src: 'assets/images/bfbc2.jpg',
                  name: 'Battlefield Bad Company 2',
                  price: '700 PKR'
                },
                {
                  src: 'assets/images/tkn7.jpg',
                  name: 'Tekken 7',
                  price: '1000 PKR'
                },
                {
                  src: 'assets/images/wwe2k20.jpg',
                  name: 'WWE 2K20',
                  price: '3000 PKR'
                }
              ],
              activeIndex: 0
        };
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
    }
    previous = () => {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? this.state.games.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
    next = () => {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === this.state.games.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
    goToIndex = (newIndex) => {
      if (this.state.animating) return;
      this.setState({ activeIndex: newIndex });
    }

    render(){
      const slides = this.state.games.map((game) => {
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
            <Card>
            <CardImg width="100%" src={game.src} alt={game.name} />
            <CardBody>
              <CardTitle>{game.name}</CardTitle>
              <CardSubtitle>{game.price}</CardSubtitle>
            </CardBody>
            </Card>
          </CarouselItem>
        );
      });
      const tiles = this.state.games.map((game) => {
        return(
          <Container className="col-sm-3">
          <Card>
            <CardImg width="100%" src={game.src} alt={game.name} />
              <CardBody>
                <CardTitle>{game.name}</CardTitle>
                <CardSubtitle>{game.price}</CardSubtitle>
              </CardBody>
          </Card>
          </Container>
        );
      });
      return(
            <React.Fragment>
              <Container>
                  <Carousel
                    activeIndex={this.state.activeIndex}
                    next={this.next}
                    previous={this.previous}
                  >
                    <CarouselIndicators items={this.state.games} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
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