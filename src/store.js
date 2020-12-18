import React from 'react';
// import produce from 'immer';

export const initialState = {
  test: 'test'
};

export const reducer = (globalState, { type, payload }) => {
  switch (type) {
    case 'ALL':
      console.log(type, payload)
      return { ...globalState, ...payload }
    default:
      throw new Error();
  }
};

const StoreContext = React.createContext(null);

export default StoreContext;
