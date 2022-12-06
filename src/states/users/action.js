/**
 * @TODO: Define all the actions (creator) for the users state
 */
import api from '../../utils/api';

const ActionType = {
  RECEIVE_USER: 'RECEIVE_USER',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USER,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ id, name, password }) {
  return async () => {
    try {
      await api.register({ id, name, password });
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser,
};
