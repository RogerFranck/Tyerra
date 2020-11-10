import { Grid } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Appbar from '../components/appbar';
import Buscador from './components/Buscador';
import CardPropiedad from './components/CardPropiedad';

function Home({ Propiedades }) {
  const popiedad = Propiedades.map((pop) => (
    <Grid item xs={12} md={9} key={pop._id}>
      <CardPropiedad
        id={pop._id}
        Precio={pop.Precio}
        Colonia={pop.Colonia}
        Estado={pop.Estado}
        Ciudad={pop.Ciudad}
        Baño={pop.Baños}
        Categoria={pop.Categoria}
        Recamaras={pop.Recamaras}
        Pisos={pop.Pisos}
        Terreno={pop.Terreno}
        Construccion={pop.ConstruccionMedida}
        Picina={pop.Picina}
        cochera={pop.cochera}
        capacidadCochera={pop.CapacidadCochera}
        img={pop.Imagenes[0]}
      />
    </Grid>
  ));
  return (
    <>
      <Appbar />
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Buscador />
          </Grid>
          {popiedad}
        </Grid>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => ({
  Propiedades: state.Propiedades,
});

export default connect(mapStateToProps, {})(Home);
