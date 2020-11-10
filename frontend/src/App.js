import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Register from './views/Login/Register';
import CertiUser from './views/Login/CertiUser';
import Propiedades from './views/Propiedades/Propiedades';
import './App.css';
import { cargarData, loaduser } from './Redux/Actions';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#262832',
    },
    secondary: {
      main: '#2B303B',
    },
  },
});

function App() {
  useEffect(() => {
    store.dispatch(cargarData());
    store.dispatch(loaduser());
  });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <ThemeProvider theme={theme}>
            <Route path="/" exact component={Home} />
            <Route path="/Propiedades/:id" exact component={Propiedades} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Registro" exact component={Register} />
            <Route path="/Certificarse/:id" exact component={CertiUser} />
          </ThemeProvider>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
