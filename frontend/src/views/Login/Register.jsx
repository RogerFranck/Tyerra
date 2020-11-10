import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  TextField,
  // Typography,
  CardHeader,
  CardContent,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../Assets/Tyerra.png';
import { Registro } from '../../Redux/Actions';

const useStyles = makeStyles((theme) => ({
  main: {
    color: 'white',
  },
  root: {
    width: '100%',
    height: '300px',
    zIndex: '0',
    background: theme.palette.primary.main,
  },
  container: {
    position: 'relative',
    zIndex: '1',
    top: '50px',
    width: '35%',
  },
  img: {
    marginLeft: '25px',
  },
  '@media screen and (max-width: 600px)': {
    container: {
      width: '95%',
    },
  },
}));

function Register({ enviarRegistro }) {
  const classes = useStyles();
  const [User, setUser] = useState('');
  const [Password, setPassword] = useState('');
  const [Correo, setCorreo] = useState('');
  const [Numero, setNumero] = useState('');
  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <Link to="/">
          <img alt="logo" src={logo} className={classes.img} />
        </Link>
        <center>
          <Card className={classes.container}>
            <CardHeader
              title="Regsitro"
            />
            <CardContent>
              <form autoComplete="off">
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="User"
                  value={User}
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                  label="Usuario"
                  name="usuario"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="Correo"
                  value={Correo}
                  onChange={(e) => {
                    setCorreo(e.target.value);
                  }}
                  label="Correo"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="Telefono"
                  value={Numero}
                  onChange={(e) => {
                    setNumero(e.target.value);
                  }}
                  label="Telefono"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  value={Password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  label="Contraseña"
                  type="password"
                  id="password"
                />
                <br />
                <br />
                <br />
                <Button
                  onClick={() => enviarRegistro(User, Password, Numero, Correo)}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="submit"
                >
                  Regsitro
                </Button>
                <br />
                <br />
                <Button
                  fullWidth
                  color="primary"
                  className="submit"
                  component={Link}
                  to="/Login"
                >
                  Iniciar sesion
                </Button>
              </form>
            </CardContent>
          </Card>
        </center>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  enviarRegistro(User, Password, Numero, Correo) {
    dispatch(Registro(User, Password, Numero, Correo));
  },
});

export default connect(null, mapDispatchToProps)(Register);
