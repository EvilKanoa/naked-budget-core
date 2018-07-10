import { createSelector } from 'reselect';
import _ from 'lodash';

import Transaction from '../models/transaction';

// basic selectors
export const getNewId = (state) => state.transactions.new;

export const getDirtyTransactions = (state) => state.transactions.data;

export const getTransactions = createSelector(
    [getDirtyTransactions, getNewId],
    (transactions, newId) => _(transactions)
        .map((txn) => new Transaction(txn))
        .filter((txn) => txn.validate() && txn.id !== newId)
        .value()
);

export const getSortOrder = (state) => state.transactions.order;

export const getSortedTransactions = createSelector(
    [getTransactions, getSortOrder],
    (transactions, sortOrder) => sortOrder.ascending ?
        _(transactions).sortBy(sortOrder.field).value() :
        _(transactions).sortBy(sortOrder.field).reverse().value()
);

export const getNewTransaction = createSelector(
    [getNewId, getDirtyTransactions],
    (id, transactions) => _(transactions).filter((txn) => txn.id === id).head()
);

export const getNextId = createSelector(
    [getDirtyTransactions],
    (transactions) => parseInt(_.get(_(transactions).sortBy('id').head(), 'id', -1), 10) + 1
);
