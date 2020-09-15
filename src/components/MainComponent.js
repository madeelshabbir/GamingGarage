import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import GamesInfo from './GamesInfoComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    games: state.games
  }
}

class Main extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div style={{backgroundColor: '#feffb5'}}>
        <Header />
          <Switch>
            <Route exact path='/home' component={() => <Home games={this.props.games}/> } />
            <Route path='/home/:gameId' component={({match}) => { return(
                <GamesInfo cart={this.props.cart} game={this.props.games.filter((game) => game.id === parseInt(match.params.gameId,10))[0]} />
              );}} />
            <Redirect to="/home" /> 
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));