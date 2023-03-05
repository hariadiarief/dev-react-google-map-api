import axios from 'axios';
import qs from 'qs';

export const getAutoCompleteLocation = (params) => (dispatch) => {
  const { q } = params;

  const payload = qs.stringify({
    input: q,
    types: 'establishment',
    key: process.env.REACT_APP_GOOGLE_API_KEY
  });


  return new Promise((resolve) => {
    axios.get(`/api/autocomplete/json?${payload}`)
      .then((response) => {
        dispatch({
          type: "GET_AUTO_COMPLETE_LOCATION",
          payload: response.data.predictions,
        });
        resolve(response)
      })
      .catch((err) => console.log(err));;
  })

};

export const setSelectedLoaction = (params) => (dispatch) => {
  dispatch({
    type: "SET_SELECTED_LOACTION",
    payload: params,
  });
}; 