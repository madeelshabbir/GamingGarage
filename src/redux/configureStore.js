import {createStore, combineReducers} from 'redux';
import { Games } from './games';
import { Tickets } from './tickets';
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            games: Games,
            tickets: Tickets
        })
    );

    return store;
}