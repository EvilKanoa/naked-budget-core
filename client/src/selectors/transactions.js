import { createSelector } from 'reselect';
import _ from 'lodash';

// basic selectors
export const getTransactions = (state) => state.transactions.data;

export const getSortOrder = (state) => state.transactions.order;

export const getSortedTransactions = createSelector(
    [getTransactions, getSortOrder],
    (transactions, sortOrder) => sortOrder.ascending ?
        _(transactions).sortBy(sortOrder.field).value() :
        _(transactions).sortBy(sortOrder.field).reverse().value()
);