import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import GamesInfo from './GamesInfoComponent';
import Support from './SupportComponent';
import Cart from './CartComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postTicket, fetchGames, fetchTickets } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = (state) => {
  return {
    games: state.games,
    tickets: state.tickets
  }
}
const mapDispatchToProps = (dispatch) => ({
  postTicket: (topic, email, details) => dispatch(postTicket(topic, email, details)),
  fetchGames: () => dispatch(fetchGames()),
  resetTicketForm: () => { dispatch(actions.reset('ticket'))},
  fetchTickets: () => dispatch(fetchTickets())
});

class Main extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchGames();
    this.props.fetchTickets();
  }
  
  render(){
    return (
      <div style={{backgroundColor: '#feffb5'}}>
        <Header />
            <Switch>
            <Route exact path='/home' component={() => <Home 
              games={this.props.games.games}
              isLoading={this.props.games.isLoading}
              errMsg={this.props.games.errMsg}
            /> } />
            <Route path='/home/:gameId' component={({match}) => { return(
                <GamesInfo
                  game={this.props.games.games.filter((game) => game.id === parseInt(match.params.gameId,10))[0]}
                  isLoading={this.props.games.isLoading}
                  errMsg={this.props.games.errMsg} 
                />
              );}} />
            <Route exact path='/cart' component={() => <Cart /> } />
            <Route exact path='/support' component={() => <Support
            tickets={this.props.tickets.tickets}
            ticketsErrMsg={this.props.tickets.errMsg}
            postTicket={this.props.postTicket}
            resetTicketForm={this.props.resetTicketForm}/> } />
            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));