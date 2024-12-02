import * as apis from '../../services';
import actionTypes from './actionTypes';

export const getCategories = () => async dispatch => {
  try {
    const response = await apis.apiGetCategory();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_CATEGORIES,
        categories: response.data.response
      });
    } else {
      dispatch({
        type: actionTypes.GET_CATEGORIES,
        msg: response.data.msg,
        categories: null
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CATEGORIES,
      categories: null
    });
  }
};

export const getAllPrices = () => async dispatch => {
  try {
    const response = await apis.getAllPrices();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_PRICES,
        prices: response.data.response
      });
    } else {
      dispatch({
        type: actionTypes.GET_PRICES,
        msg: response.data.msg,
        prices: null
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRICES,
      areas: null
    });
  }
};

export const getAllAreas = () => async dispatch => {
  try {
    const response = await apis.getAllArea();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_AREAS,
        areas: response.data.response
      });
    } else {
      dispatch({
        type: actionTypes.GET_AREAS,
        msg: response.data.msg,
        areas: null
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_AREAS,
      areas: null
    });
  }
};
