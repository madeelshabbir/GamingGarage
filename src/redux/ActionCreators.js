import * as ActionTypes from './ActionTypes';

export const addTicket = (topic, email, details) => ({
    type: ActionTypes.ADD_TICKET,
    payload: {
        topic: topic,
        email: email,
        details: details
    }
});