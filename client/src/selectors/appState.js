import { createSelector } from 'reselect';
import _ from 'lodash';
import Pages from '../components/pages';

// basic selectors

export const getPage = (state) => state.appState.page;

export const getPageComponent = createSelector(
    [getPage],
    (pageId) => _(Pages).filter((page) => page.id === pageId).first().component
);