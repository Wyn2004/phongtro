import actionTypes from "./actionTypes"
import { apiRegister, apiLogin } from '../../services/auth'

export const register = (payload) => async (dispatch) => {
    try {
        const response = await apiRegister(payload);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.REGISTER_SUCCESS,
                data: response.data.token
            });
        } else {
            dispatch({
                type: actionTypes.REGISTER_FAILURE,
                data: response.data.msg
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.REGISTER_FAILURE,
            data: null
        });
    }
};

export const login = (payload) => async (dispatch) => {
    try {
        const response = await apiLogin(payload);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                data: response.data.token
            });
        } else {
            dispatch({
                type: actionTypes.LOGIN_FAILURE,
                data: response.data.msg
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.LOGIN_FAILURE,
            data: null
        });
    }
};

export const logout = () => ({
    type: actionTypes.LOGOUT
})
