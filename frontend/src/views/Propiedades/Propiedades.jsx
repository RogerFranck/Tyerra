import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Appbar from '../components/appbar';
import Galery from './components/Galery';
import DescriPropi from './components/DescriPropi';
import Mapas from './components/Mapas';
import Caracteristicas from './components/Caracteristicas';

// eslint-disable-next-line no-shadow
function Propiedades({ Propiedades, isAuthenticated }) {
  const param = useParams();
  const caramelo = Propiedades.filter((p) => p._id === param.id);
  const isAuth = isAuthenticated;
  const popiedad = caramelo.map((pop) => (
    <Galery
      key={pop._id}
      img={pop.Imagenes}
    />
  ));
  const info = caramelo.map((pop) => (
    <DescriPropi
      key={pop._id}
      Precio={pop.Precio}
      Descripcion={pop.Descripcion}
    />
  ));
  const mapa = caramelo.map((pop) => (
    <Mapas
      key={pop._id}
      mapa={pop.Mapa}
    />
  ));
  const carac = caramelo.map((pop) => (
    <Caracteristicas
      key={pop._id}
      Precio={pop.Precio}
      Colonia={pop.Colonia}
      Estado={pop.Estado}
      Calle={pop.Calle}
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
      NumeroCasa={pop.NumeroCasa}
    />
  ));
  return (
    <>
      <Appbar />
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            {popiedad}
          </Grid>
          <Grid item xs={12} md={6}>
            {info}
          </Grid>
          <Grid item xs={12} md={12}>
            {carac}
          </Grid>
          {
            isAuth
              ? (
                <Grid item xs={12} md={12}>
                  {mapa}
                </Grid>
              ) : (
                <div />
              )
          }
        </Grid>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => ({
  Propiedades: state.Propiedades,
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps, {})(Propiedades);
