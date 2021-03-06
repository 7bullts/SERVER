import axios from 'axios';
import {
  FETCH_USER
} from './types';

export const fetch_user = () => async dispatch => {
  const res = await axios.get('/api/caurrent_user');
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
}