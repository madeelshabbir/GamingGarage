import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import GamesInfo from './GamesInfoComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { GAMES } from '../shared/games';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      games: GAMES
    }
  }
  render(){
    return (
      <div style={{backgroundColor: '#feffb5'}}>
        <Header />
          <Switch>
            <Route exact path='/home' component={() => <Home games={this.state.games}/> } />
            <Route path='/home/:gameId' component={({match}) => { return(
                <GamesInfo game={this.state.games.filter((game) => game.id === parseInt(match.params.gameId,10))[0]} />
              );}} />
            <Redirect to="/home" /> 
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;