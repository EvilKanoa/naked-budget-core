import { SET_PAGE } from '../actions/app';

const initialState = {
    page: 'budget'
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE:
            return {
                ...state,
                page: action.page,
            };
        default:
            return { ...state };
    }
};

export default appReducer;