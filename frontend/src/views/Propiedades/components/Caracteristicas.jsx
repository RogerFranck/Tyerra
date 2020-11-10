/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import RoomIcon from '@material-ui/icons/Room';
import PoolIcon from '@material-ui/icons/Pool';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import GridOnIcon from '@material-ui/icons/GridOn';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import HotelIcon from '@material-ui/icons/Hotel';
import ApartmentIcon from '@material-ui/icons/Apartment';
import { Grid, Typography } from '@material-ui/core';

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
  flex: {
    display: 'flex',
  },
  marg: {
    marginTop: '30px',
  },
  marg2: {
    marginTop: '20px',
  },
  marg3: {
    marginRight: '5px',
  },
  contMap: {
    width: '90%',
    display: 'flex',
    padding: '8px',
  },
}));

export default function Caracteristicas({
  Estado,
  Colonia,
  Ciudad,
  Categoria,
  Terreno,
  Construccion,
  Picina,
  cochera,
  Baño,
  Recamaras,
  Pisos,
  capacidadCochera,
  Calle,
  NumeroCasa,
}) {
  const classes = useStyles();
  return (
    <div className={classes.Root}>
      <Grid container>
        <br />
        <Grid item xs={12}>
          <Typography className={classes.price} variant="h4">
            Caracteristicas
          </Typography>
        </Grid>
        <br />
        <br />
        <Grid item xs={12} md={8} className={classes.marg}>
          <div className={classes.flex}>
            <HomeWorkIcon className={classes.marg3} />
            <Typography variant="subtitle1">
              Tipo de propiedad: {Categoria}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4} className={classes.marg}>
          <div className={classes.flex}>
            <MeetingRoomIcon className={classes.marg3} />
            <Typography variant="subtitle1">
              Baños: {Baño}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={8} className={classes.marg}>
          <div className={classes.flex}>
            <GridOnIcon className={classes.marg3} />
            <Typography variant="subtitle1">
              Terreno: {Terreno}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4} className={classes.marg}>
          <div className={classes.flex}>
            <ApartmentIcon className={classes.marg3} />
            <Typography variant="subtitle1">
              Pisos: {Pisos}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={8} className={classes.marg}>
          <div className={classes.flex}>
            <GridOnIcon className={classes.marg3} />
            <Typography variant="subtitle1">
              Construccion: {Construccion}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4} className={classes.marg}>
          <div className={classes.flex}>
            <HotelIcon className={classes.marg3} />
            <Typography variant="subtitle1">
              Cuartos: {Recamaras}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={8} className={classes.marg}>
          {Picina
            ? (
              <div className={classes.flex}>
                <PoolIcon className={classes.marg3} />
                <Typography variant="subtitle1">
                  Picina
                </Typography>
              </div>
            )
            : (
              <div />
            )}
        </Grid>
        <Grid item xs={12} md={4} className={classes.marg}>
          {cochera
            ? (
              <div className={classes.flex}>
                <DirectionsCarIcon className={classes.marg3} />
                <Typography variant="subtitle1">
                  cochera: {capacidadCochera}
                </Typography>
              </div>
            )
            : (
              <div />
            )}
        </Grid>
        <Grid item xs={12} className={classes.marg2}>
          <div className={classes.contMap}>
            <div>
              <RoomIcon />
            </div>
            <Typography variant="subtitle1" className={classes.pla}>
              {Ciudad}, {Estado}, {Colonia}, Calle: {Calle}, #{NumeroCasa}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

Caracteristicas.propTypes = {
  Estado: PropTypes.string.isRequired,
  Colonia: PropTypes.string.isRequired,
  Ciudad: PropTypes.string.isRequired,
  Baño: PropTypes.number.isRequired,
  Categoria: PropTypes.string.isRequired,
  Recamaras: PropTypes.number.isRequired,
  Pisos: PropTypes.number.isRequired,
  Terreno: PropTypes.string.isRequired,
  Construccion: PropTypes.string.isRequired,
  Picina: PropTypes.bool.isRequired,
  cochera: PropTypes.bool.isRequired,
  capacidadCochera: PropTypes.number.isRequired,
  Calle: PropTypes.string.isRequired,
  NumeroCasa: PropTypes.string.isRequired,
};
