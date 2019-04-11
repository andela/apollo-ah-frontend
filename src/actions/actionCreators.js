import { PASSWORD_RESET_TYPES } from './actionTypes';

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
    type: PASSWORD_RESET_TYPES.PASSWORD.LOADING,
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
    type: PASSWORD_RESET_TYPES.PASSWORD.SUCCESS,
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
    type: PASSWORD_RESET_TYPES.PASSWORD.FAILURE,
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

export function modalReset(responseData) {
  return {
    type: PASSWORD_RESET_TYPES.MODAL.RESET,
    responseData,
  };
}