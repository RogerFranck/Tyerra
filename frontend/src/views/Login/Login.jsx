import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  TextField,
  CardHeader,
  CardContent,
  Collapse,
  IconButton,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../../Assets/Tyerra.png';
import { login } from '../../Redux/Actions';

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
    bottom: '100px',
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

function Login({
  statusLogin, enviarLogin,
}) {
  // eslint-disable-next-line no-unused-vars
  const status = statusLogin;
  const classes = useStyles();
  const [User, setUser] = useState('');
  const [Password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (status === 'El usuario no existe' || status === 'Contraseña invalida') {
      setOpen(true);
      setText(status);
    }
  }, [status]);

  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <Link to="/">
          <img alt="logo" src={logo} className={classes.img} />
        </Link>
      </div>
      <center>
        <Card className={classes.container}>
          <CardHeader
            title="Login"
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
              <Collapse in={open}>
                <Alert
                  severity="error"
                  action={(
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  )}
                >
                  {text}
                </Alert>
              </Collapse>
              <br />
              <br />
              <Button
                component={Link}
                to="/"
                onClick={() => enviarLogin(User, Password)}
                fullWidth
                variant="contained"
                color="primary"
              >
                Iniciar sesion
              </Button>
              <br />
              <Button
                fullWidth
                color="primary"
                component={Link}
                to="/Registro"
              >
                Registrate
              </Button>
            </form>
          </CardContent>
        </Card>
      </center>
    </div>
  );
}

const mapStateToProps = (state) => ({
  statusLogin: state.statusLogin,
});

const mapDispatchToProps = (dispatch) => ({
  enviarLogin(User, Password) {
    dispatch(login(User, Password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
