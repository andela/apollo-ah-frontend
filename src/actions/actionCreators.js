/* eslint-disable import/prefer-default-export */
import {
  PASSWORD_RESET_REQUEST_LOADING,
  PASSWORD_RESET_REQUEST_FAILURE,
  PASSWORD_RESET_REQUEST_SUCCESS,
} from './actionTypes';

/**
 * request loading
 *
 * @export
 * @param boolean isLoading - indicate if there is an ongoing request
 * @param boolean responseData - data gotten from the request
 * @returns {object}
 */

export function requestLoading(isLoading, responseData) {
  return {
    type: PASSWORD_RESET_REQUEST_LOADING,
    isLoading,
    responseData,
  };
}

/**
 * request loading success
 *
 * @export
 * @param boolean isLoading - indicate if there is an ongoing request
 * @param string responseData - response message gotten from the request
 * @returns {object}
 */

export function requestLoadingSuccess(isLoading, responseData) {
  return {
    type: PASSWORD_RESET_REQUEST_SUCCESS,
    isLoading,
    responseData,
  };
}

/**
 * request loading failure
 *
 * @export
 * @param boolean isLoading - indicate if there is an ongoing request
 * @param string responseData - response message gotten from the request
 * @returns {object}
 */

export function requestLoadingFail(isLoading, responseData) {
  return {
    type: PASSWORD_RESET_REQUEST_FAILURE,
    isLoading,
    responseData,
  };
}