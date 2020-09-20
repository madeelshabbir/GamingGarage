import * as ActionTypes from './ActionTypes';
import { GAMES } from '../shared/games';

export const addTicket = (topic, email, details) => ({
    type: ActionTypes.ADD_TICKET,
    payload: {
        topic: topic,
        email: email,
        details: details
    }
});

export const fetchGames = () => (dispatch) => {
    dispatch(gamesLoading(true));
    setTimeout(()=>{
        dispatch(addGames(GAMES))
    }, 200);
};

export const gamesLoading = () => ({
    type: ActionTypes.GAMES_LOADING
});

export const gamesFailed = (errmsg) => ({
    type: ActionTypes.GAMES_FAILED,
    payload: errmsg
});

export const addGames = (games) => ({
    type: ActionTypes.ADD_GAMES,
    payload: games
});