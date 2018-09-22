import { FETCH_ACCESS_LOG } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_ACCESS_LOG:
            return action.payload;
        default:
            return state;
    }
}