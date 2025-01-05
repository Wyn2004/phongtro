import { createSelector } from 'reselect';

const selectorAppState = state => state.app;

export const getCategories = createSelector([selectorAppState], appSelector => appSelector.categories);
export const getPrices = createSelector([selectorAppState], appSelector => appSelector.prices);
export const getAreas = createSelector([selectorAppState], appSelector => appSelector.areas);
export const getProvinces = createSelector([selectorAppState], appSelector => appSelector.provinces);
