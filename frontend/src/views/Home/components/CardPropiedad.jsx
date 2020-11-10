/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';

import RoomIcon from '@material-ui/icons/Room';
import PoolIcon from '@material-ui/icons/Pool';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import GridOnIcon from '@material-ui/icons/GridOn';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import HotelIcon from '@material-ui/icons/Hotel';
import ApartmentIcon from '@material-ui/icons/Apartment';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    color: 'white',
    background: '#2B303B',
  },
  img: {
    width: '45%',
    borderRadius: '0px 5px 5px 0px',
    marginRight: '20px',
  },
  price: {
    fontWeight: 'bold',
  },
  marg: {
    marginTop: '10px',
  },
  marg2: {
    marginTop: '20px',
  },
  marg3: {
    marginRight: '5px',
  },
  pla: {
    marginLeft: '10px',
  },
  contMap: {
    border: '1px solid #C7C5C5',
    borderRadius: '5px',
    width: '65%',
    display: 'flex',
    padding: '8px',
  },
  flex: {
    display: 'flex',
  },
  '@media screen and (max-width: 600px)': {
    root: {
      display: 'block',
    },
    img: {
      width: 500,
    },
    contMap: {
      width: '85%',
    },
  },
}));

export default function CardPropiedad({
  Precio,
  Colonia,
  Estado,
  Ciudad,
  Baño,
  Categoria,
  Recamaras,
  Pisos,
  Terreno,
  Construccion,
  Picina,
  cochera,
  capacidadCochera,
  img,
  id,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        src={img}
        className={classes.img}
        title="Foto de la propiedad"
      />
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography className={classes.price} variant="h5">
              $ {new Intl.NumberFormat().format(Precio)}
            </Typography>
          </Grid>
          <br />
          <Grid item xs={12}>
            <Typography className={classes.price} variant="subtitle1">
              {Colonia}
            </Typography>
          </Grid>
          <br />
          <br />
          <Grid item xs={8} className={classes.marg}>
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
          <Grid item xs={8} className={classes.marg}>
            <div className={classes.flex}>
              <GridOnIcon className={classes.marg3} />
              <Typography variant="subtitle1">
                Terreno: {Terreno}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4} className={classes.marg}>
            <div className={classes.flex}>
              <ApartmentIcon className={classes.marg3} />
              <Typography variant="subtitle1">
                Pisos: {Pisos}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={8} className={classes.marg}>
            <div className={classes.flex}>
              <GridOnIcon className={classes.marg3} />
              <Typography variant="subtitle1">
                Construccion: {Construccion}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4} className={classes.marg}>
            <div className={classes.flex}>
              <HotelIcon className={classes.marg3} />
              <Typography variant="subtitle1">
                Cuartos: {Recamaras}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={8} className={classes.marg}>
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
          <Grid item xs={4} className={classes.marg}>
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
          <Grid item xs={8} className={classes.marg2}>
            <div className={classes.contMap}>
              <div>
                <RoomIcon />
              </div>
              <Typography variant="subtitle1" className={classes.pla}>
                {Ciudad}, {Estado}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4} className={classes.marg2}>
            <Button fullWidth variant="outlined" component={Link} to={`/Propiedades/${id}`} color="inherit">
              Ver
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

CardPropiedad.propTypes = {
  Precio: PropTypes.number.isRequired,
  Colonia: PropTypes.string.isRequired,
  Estado: PropTypes.string.isRequired,
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
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
