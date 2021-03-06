import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

/**
 * Will be fired on "REGISTER" action
 * @param {Object} action Action payload that holds the username password for a new user
 * It will then log them in after if no errors, then sets it to redux state to allow the component to show
 * */

function* registerUser(action) {
  try {
    yield put({ type: 'CLEAR_REGISTRATION_ERROR' });

    // passes the username and password from the payload to the server
    yield axios.post('/api/user/register', action.payload);

    // automatically log a user in after registration
    yield put({ type: 'LOGIN', payload: action.payload });

    yield put({ type: 'SET_TO_LOGIN_MODE' });
  } catch (error) {
    console.log('Error with user registration in registration.saga', error);
    yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* registrationSaga() {
  yield takeLatest('REGISTER', registerUser);
}

export default registrationSaga;
