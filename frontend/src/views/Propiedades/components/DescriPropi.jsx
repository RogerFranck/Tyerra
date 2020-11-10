/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => ({
  Root: {
    color: 'white',
    background: '#2B303B',
    padding: '20px',
    borderRadius: '5px',
  },
  margtop: {
    marginTop: '30px',
  },
  btn: {
    marginTop: '30px',
    color: 'white',
    borderColor: 'white',
    width: '100%',
  },
}));

function noAuth() {
  const classes = useStyles();
  return (
    <Alert severity="warning" className={classes.margtop}>
      Para mas informacion debes iniciar sesion
    </Alert>
  );
}

function AuthNotFull() {
  const classes = useStyles();
  return (
    <Alert severity="info" className={classes.margtop}>
      Para mas informacion debes certificarte
    </Alert>
  );
}

function AuthFull() {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Button variant="outlined" className={classes.btn}>
          Visitar Propiedad
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <Button variant="outlined" className={classes.btn}>
          Contactar con el vendedor
        </Button>
      </Grid>
    </Grid>
  );
}

function DescriPropi({
  Precio,
  Descripcion,
  isAuthenticated,
  Userfull,
}) {
  const classes = useStyles();
  const userAuth = isAuthenticated;
  let btn;
  const usergull = Userfull;
  if (userAuth && usergull) {
    btn = AuthFull();
  } else if (userAuth && usergull === false) {
    btn = AuthNotFull();
  } else if (userAuth === false && usergull === false) {
    btn = noAuth();
  }
  return (
    <div className={classes.Root}>
      <Typography variant="h4">
        $ {new Intl.NumberFormat().format(Precio)}
      </Typography>
      <Typography variant="subtitle1" className={classes.margtop}>
        {Descripcion}
      </Typography>
      {btn}
    </div>
  );
}

DescriPropi.propTypes = {
  Precio: PropTypes.number.isRequired,
  Descripcion: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  Userfull: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
  Userfull: state.Userfull,
});

export default connect(mapStateToProps, {})(DescriPropi);
