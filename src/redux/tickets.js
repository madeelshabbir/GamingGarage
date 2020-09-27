import * as ActionTypes from './ActionTypes';

export const Tickets = (state = {
    errMsg: null,
    tickets: []
    }, action) => {
    switch(action.type){
        case ActionTypes.ADD_TICKETS:
            return {...state, errMsg: null, tickets: action.payload};
        case ActionTypes.TICKETS_FAILED:
            return {...state, errMess: action.payload};
        case ActionTypes.ADD_TICKET:
            var ticket = action.payload;
            console.log("Ticket: ", ticket);
            return {...state, tickets: state.tickets.concat(ticket)};
        default:
            return state;
    }
};