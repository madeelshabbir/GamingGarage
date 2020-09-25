import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

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
    return fetch(baseUrl + 'games')
        .then(response => {
            if (response.ok) {
            return response;
            } 
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
                var errmsg = new Error(error.message);
                throw errmsg;
        })
        .then(response => response.json())
        .then(games => dispatch(addGames(games)))
        .catch(error => dispatch(gamesFailed(error.message)));
};

export const gamesLoading = () => ({
    type: ActionTypes.GAMES_LOADING
});

export const gamesFailed = (errmsg) => ({
    type: ActionTypes.GAMES_FAILED,
    payload: errmsg
});

export const fetchTickets = () => (dispatch) => {    
    return fetch(baseUrl + 'tickets')
        .then(response => {
            if (response.ok) {
            return response;
            } 
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
                var errmsg = new Error(error.message);
                throw errmsg;
        })
        .then(response => response.json())
        .then(tickets => dispatch(addTickets(tickets)))
        .catch(error => dispatch(ticketsFailed(error.message)));
};

export const addGames = (games) => ({
    type: ActionTypes.ADD_GAMES,
    payload: games
});

export const ticketsFailed = (errmsg) => ({
    type: ActionTypes.TICKETS_FAILED,
    payload: errmsg
});

export const addTickets = (tickets) => ({
    type: ActionTypes.ADD_TICKETS,
    payload: tickets
});