import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';

import { Menu, MenuItem } from '@material-ui/core';
import TyrraLogo from '../../Assets/Tyerra.png';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginBottom: '30px',
  },
  title: {
    flexGrow: 1,
  },
  img: {
    marginRight: '10px',
  },
}));

function AuthFull() {
  return (
    <div />
  );
}

function notAuthFull() {
  return (
    <Button
      color="inherit"
      variant="outlined"
      component={Link}
      to="/Certificarse/:dawdawd"
      style={{ marginLeft: 10 }}
    >
      Certificarse
    </Button>
  );
}

function noAuth() {
  return (
    <Button
      color="inherit"
      variant="outlined"
      component={Link}
      to="/Registro"
      style={{ marginLeft: 10 }}
    >
      Registro
    </Button>
  );
}

function ButtonAppBar({ isAuthenticated, Userfull }) {
  const classes = useStyles();
  const userAuth = isAuthenticated;
  const usergull = Userfull;
  let btn;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (userAuth && usergull) {
    btn = AuthFull();
  } else if (userAuth && usergull === false) {
    btn = notAuthFull();
  } else if (userAuth === false && usergull === false) {
    btn = noAuth();
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <img src={TyrraLogo} className={classes.img} alt="Logo" />
          </Link>
          <Typography variant="h6" className={classes.title}>
            Tyerra
          </Typography>
          {
            !userAuth
              ? (
                <Button color="inherit" variant="outlined" component={Link} to="/Login" className={classes.btn}>
                  Login
                </Button>
              )
              : (
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircleIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem>
                      Configuracion
                    </MenuItem>
                    <MenuItem>
                      Vender
                    </MenuItem>
                    <MenuItem onClick={() => {
                      localStorage.removeItem('JWT');
                      window.location.href = '/';
                    }}
                    >
                      Cerrar sesión
                    </MenuItem>
                  </Menu>
                </div>
              )
          }
          {btn}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
  Userfull: state.Userfull,
});

export default connect(mapStateToProps, {})(ButtonAppBar);
