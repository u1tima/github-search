import React, { useReducer } from 'react';
import { AlertContext } from "./alertContext";
import { alertReducer } from './alertReducer';
import { HIDE_ALERT, SHOW_ALERT } from '../types';

export const AlertState = (props) => {

  const [state, dispatch] = useReducer(alertReducer, null);

  const hide = () => dispatch({ type: HIDE_ALERT });
  const show = (text, type = 'secondary') => dispatch({
    type: SHOW_ALERT,
    payload: { type, text }
  })

  return (
    <AlertContext.Provider value = {{
      hide, show, alert: state,
    }}>
      {props.children}
    </AlertContext.Provider>
  )
}