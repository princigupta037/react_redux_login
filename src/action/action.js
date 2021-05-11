import { LOGIN, LOGIN_ERROR } from '../constants/actionTypes';

export const login = (username, password, isAuth) => (dispatch) => {
  try {
    if (username.username == 'hruday@gmail.com' && username.password == 'hruday123') {
      isAuth = true;
      dispatch({
        type: LOGIN,
        payload: { username, password, isAuth },
      });
      isAuth = false;
    }
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();

    dispatch({
      type: LOGIN_ERROR,
    });
  }
}


