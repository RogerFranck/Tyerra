import axios from 'axios';
import api from './const';

export const GET_PROPIEDAD = 'GET_PROPIEDAD';
export const LOAD_USERINFO = 'LOAD_USERINFO';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_UNSUCCESSFULL = 'LOGIN_UNSUCCESSFULL';

export const GetPropiedad = (payload) => ({
  type: GET_PROPIEDAD,
  payload,
});

export const LoadUserInfo = (payload) => ({
  type: LOAD_USERINFO,
  payload,
});

export const LoginSuccesS = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const LoginUnsuccessFull = (payload) => ({
  type: LOGIN_UNSUCCESSFULL,
  payload,
});

export const cargarData = () => async (dispatch) => {
  try {
    const res = await axios.get(`${api}/propiedad`);
    dispatch(GetPropiedad(res.data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`error: ${error}`);
  }
};

export const loaduser = () => async (dispatch) => {
  const jwt = localStorage.getItem('JWT');
  if (jwt) {
    try {
      const res = await axios.get(`${api}/login/validar`, {
        headers: {
          'x-jwt': jwt,
        },
      });
      dispatch(LoadUserInfo(res.data));
    } catch (error) {
      localStorage.removeItem('JWT');
      // eslint-disable-next-line no-console
      console.log(`Roger: ${error}`);
    }
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${api}/login`, {
      usuario: email,
      password,
    });
    if (data.auth) {
      localStorage.setItem('JWT', data.token);
      window.location.href = '/';
      loaduser();
    } else {
      dispatch(LoginUnsuccessFull(data.status));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`error: ${error}`);
  }
};

export const Registro = (usuario, password, numero, correo) => async () => {
  try {
    await axios.post(`${api}/usuarios`, {
      usuario,
      password,
      correo,
      numero,
    });
    window.location.href = '/Login';
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`error: ${error}`);
  }
};

export const UpdateCertificado = (id, usuario, numero, correo) => async () => {
  try {
    await axios.put(`${api}/usuarios/Certificado/${id}`, {
      usuario,
      correo,
      numero,
    });
    window.location.href = '/';
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`error: ${error}`);
  }
};
