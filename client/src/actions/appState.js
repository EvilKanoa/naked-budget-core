// action types

export const SET_PAGE = 'SET_PAGE';

// action creators

export const setPage = (id) => ({
    type: SET_PAGE,
    page: id,
});