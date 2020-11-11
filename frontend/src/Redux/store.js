import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  GET_PROPIEDAD,
  LOAD_USERINFO,
  LOGIN_UNSUCCESSFULL,
} from './Actions';

const initialState = {
  Propiedades: [],
  Usuario: {},
  isAuthenticated: false,
  Userfull: false,
  statusLogin: '',
};

const ReducerPrincipal = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPIEDAD:
      return {
        ...state,
        Propiedades: action.payload,
      };
    case LOAD_USERINFO:
      return {
        ...state,
        Usuario: action.payload,
        isAuthenticated: true,
        Userfull: action.payload.certificado,
      };
    case LOGIN_UNSUCCESSFULL:
      return {
        ...state,
        statusLogin: action.payload,
      };
    default:
      return state;
  }
};

export default createStore(ReducerPrincipal, applyMiddleware(thunk));
