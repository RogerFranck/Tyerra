/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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
}));

export default function Mapas({ mapa }) {
  const classes = useStyles();
  return (
    <div className={classes.Root}>
      <iframe
        src={mapa}
        width="100%"
        height="400"
        frameBorder="0"
        style={{ borderRadius: 5 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </div>
  );
}

Mapas.propTypes = {
  mapa: PropTypes.string.isRequired,
};
