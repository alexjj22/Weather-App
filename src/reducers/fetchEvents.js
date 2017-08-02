/**
 * Created by Александр on 23.07.2017.
 */

const defaultStore = {
    fetched: false,
    fetching: false,
    error: null
};

export default function reducer(state = defaultStore, action) {
    switch (action.type) {
        case "FETCH_START":
            return {
                ...state,
                fetching: true
            };
        case "FETCH_FULFILLED":
            return {
                ...state,
                fetching: false,
                fetched: true
            };
        case "FETCH_ERROR":
            return {
                fetching: false,
                fetched: false,
                error: action.error
            };
        default:
            return state;
    }
}