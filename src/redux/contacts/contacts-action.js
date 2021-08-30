import actionTypes from './contacts-types';

const getSubmitData = data => {
  return { type: actionTypes.SUBMIT, payload: data };
};

const handleDelete = data => {
  return {
    type: actionTypes.DELETE,
    payload: data,
  };
};

const changeFilterValue = value => {
  return {
    type: actionTypes.FILTER,
    payload: value,
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getSubmitData, handleDelete, changeFilterValue };
