import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import { Games } from './games';
import { Tickets } from './tickets';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialTicket } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            games: Games,
            tickets: Tickets,
            ...createForms({
                ticket: InitialTicket
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}