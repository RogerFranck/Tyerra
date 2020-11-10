import { Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  imgMini: {
    width: '100%',
    marginBottom: '10px',
    borderRadius: '5px',
  },
  imgBG: {
    width: '95%',
    marginLeft: '5%',
    borderRadius: '5px',
  },
  '@media screen and (max-width: 600px)': {
    imgMini: {
      width: '100%',
      display: 'none',
    },
    imgBG: {
      width: '100%',
      marginLeft: '0%',
    },
  },
}));

export default function Galery({ img }) {
  const classes = useStyles();
  return (
    <Grid container alignContent="center">
      <Grid item container direction="column" xs={12} md={3}>
        <Grid item xs={12}>
          <img src={img[0]} alt="foto propiedad" className={classes.imgMini} />
        </Grid>
        <Grid item xs={12}>
          <img src={img[1]} alt="foto propiedad" className={classes.imgMini} />
        </Grid>
        <Grid item xs={12}>
          <img src={img[2]} alt="foto propiedad" className={classes.imgMini} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={9}>
        <img src={img[0]} alt="foto propiedad" className={classes.imgBG} />
      </Grid>
    </Grid>
  );
}
