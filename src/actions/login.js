import { LOGIN } from './index';

export function login(name, callback) {
  return (dispatch) => {

    Promise.resolve(name)
      .then(name => {
        dispatch({
          type: LOGIN,
          payload: { name }
        });
      })
      .then(() => callback())
  };
}
