// import React, { useReducer} from 'react';
// import AlertContext from './alertContext';
// import AlertReducer from './alertReducer';
// import { SET_ALERT, REMOVE_ALERT } from '../types';

// const AlertState = () => {
//   const initialState = null;

//   const [state, dispatch] = useReducer(AlertReducer, initialState);

//   // show alert
//   const showAlert = (msg, type) => {
//         // setAlert({ msg, type });
//     dispatch({
//       type: SET_ALERT,
//       payload: { msg, type}
//     })
//     setTimeout(() => dispatch({type: REMOVE_ALERT}), 2000);
//   };

//   return (
//     <AlertContext.Provider
//       value={{
//         alert: state,
//         showAlert,
//       }}
//     >
//       {props.children}
//     </AlertContext.Provider>
//   );
// };

// export default AlertState;

import React, { useReducer } from 'react';
// import axios from 'axios';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
SET_ALERT,
REMOVE_ALERT
} from '../types';

const AlertState = props => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // set Alert
  const setAlert = (msg, type) => {
    // setAlert({ msg, type });
    dispatch({
      type: SET_ALERT,
      payload: {msg, type}
    })
    setTimeout(() => {
      // setAlert(null);
      dispatch({type: REMOVE_ALERT})
    }, 2000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;

