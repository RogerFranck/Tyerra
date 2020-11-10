import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import { Button, Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  box: {
    width: '100%',
    height: '50px',
  },
  container: {
    width: '100%',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    position: 'relative',
  },
  inp: {
    width: '100%',
    height: '50px',
    background: '#2b303b',
    border: 'none',
    fontSize: '10pt',
    color: '#63717f',
    paddingLeft: '45px',
    paddingRight: '25px',
    borderRadius: '5px',
  },
  icon: {
    position: 'absolute',
    marginLeft: '12px',
    marginTop: '13px',
    zIndex: '1',
    color: '#4f5b66',
  },
  filcont: {
    '&:hover': {
      backgroundColor: '#2b303b',
    },
    background: '#2b303b',
    height: '50px',
    position: 'relative',
    verticalAlign: 'middle',
    borderRadius: '5px',
    width: '50%',
    marginLeft: '10%',
  },
  filter: {
    color: '#4f5b66',
  },
}));

export default function Buscador() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={10} md={10}>
        <center>
          <div className={classes.box}>
            <div className={classes.container}>
              <span className={classes.icon}>
                <SearchIcon />
              </span>
              <input type="search" className={classes.inp} autoComplete="off" id="search" placeholder="Buscar..." />
            </div>
          </div>
        </center>
      </Grid>
      <Grid item xs={2} md={2}>
        <Button aria-label="Filtro" className={classes.filcont}>
          <TuneIcon className={classes.filter} />
        </Button>
      </Grid>
    </Grid>
  );
}
