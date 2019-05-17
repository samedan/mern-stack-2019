import axios from 'axios';
import { setAlert } from './alert';

import { GET_PROFILE, PROFILE_ERROR } from './types';

// Get current user profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/wp/v2/books/');

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create or update a profile
export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    console.log(formData);
    const { publisher, image1 } = formData;
    console.log(publisher);
    console.log(image1);
    const fields = {
      fields: {
        publisher,
        image1
      }
    };

    const res = await axios.post('/wp/v2/books/1233/', fields, config);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created'));
  } catch (error) {}
};
