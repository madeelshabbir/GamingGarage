import { TICKETS } from '../shared/tickets';
import * as ActionTypes from './ActionTypes';

export const Tickets = (state = TICKETS, action) => {
    switch(action.type){
        case ActionTypes.ADD_TICKET:
            var ticket = action.payload;
            ticket.id = state.length;
            console.log("Ticket: ", ticket);
            return state.concat(ticket);
        default:
            return state;
    }
};