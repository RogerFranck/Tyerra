/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Stepper,
  StepLabel,
  Step,
  Button,
  CardActions,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../Assets/Tyerra.png';
import { UpdateCertificado } from '../../Redux/Actions';

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
    width: '45%',
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

function subir() {
  return (
    <form action="">
      <input type="file" multiple />
    </form>
  );
}

function Regresar(updateservicio, userdata) {
  const {
    _id, usuario, numero, correo,
  } = userdata;
  return (
    <div>
      <Typography variant="subtitle1">
        Ya eres un usuario Certificado!!
      </Typography>
      <br />
      <Button variant="outlined" onClick={() => updateservicio(_id, usuario, numero, correo)}>
        Regresar
      </Button>
    </div>
  );
}

function getSteps() {
  return ['Subir INE', 'Subir Acta de Nacimiento', 'Subir Documento 3'];
}

function getStepContent(step, updateservicio, userdata) {
  switch (step) {
    case 0:
      return subir();
    case 1:
      return subir();
    case 2:
      return subir();
    default:
      return Regresar(updateservicio, userdata);
  }
}

function CertiUser({ Usuario, updateservicio }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const userdata = Usuario;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

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
            title="Certificarte"
          />
          <CardContent>
            <div>
              <Stepper activeStep={activeStep}>
                {steps.map((label) => {
                  const stepProps = {};
                  const labelProps = {};

                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <div>
                {getStepContent(activeStep, updateservicio, userdata)}
              </div>
            </div>
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Subir'}
            </Button>
          </CardActions>
        </Card>
      </center>
    </div>
  );
}

const mapStateToProps = (state) => ({
  Usuario: state.Usuario,
});

const mapDispatchToProps = (dispatch) => ({
  updateservicio(id, usuario, numero, correo) {
    dispatch(UpdateCertificado(id, usuario, numero, correo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CertiUser);
