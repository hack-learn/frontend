import React from 'react';
import { Container, Card, Grid } from '@material-ui/core';

const Students = () => {
  return (
    <Container>
      <Card style={{
        display: 'flex'
      }}>
        <Grid lg="8">
          <h1>INFORMACION BÁSICA</h1>
          <p>Francisco Gustavo</p>
          <p>Ser desarollador full stack</p>
        </Grid>
        <Grid lg="4">

        </Grid>
      </Card>
      <p></p>
      <Card style={{
        display: 'flex'
      }}>
        <Grid lg="8">
          <h1>INFORMACION BÁSICA</h1>
          <p>Francisco Gustavo</p>
          <p>Ser desarollador full stack</p>
        </Grid>
        <Grid lg="4">

        </Grid>
      </Card>
    </Container>
  );  
}

export default Students;