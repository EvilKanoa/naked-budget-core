import { SET_PAGE } from '../actions/appState';

const initialState = {
    page: 'budget'
};

const appState = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE:
            return {
                ...state,
                page: action.page,
            };
        default:
            return state;
    }
};

export default appState;