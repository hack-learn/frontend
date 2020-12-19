import React from 'react';
import { Card, Input, Select, MenuItem, Grid, Container } from '@material-ui/core';

const BasicInformation = () => {
  return (
    <Container>
      <Card>
        <Grid style={{
          display: 'flex'
        }} justify="space-between">
          <Grid lg="8">
            <Grid>
              <Input placeholder="Nombre completo" />
            </Grid>
            <Grid>
              <Input placeholder="Correo electronico" />
            </Grid>
            <Grid>
              <Input placeholder="Pais" />
            </Grid>
            <Grid>
              <Input placeholder="Ciudad" />
            </Grid>
            <Grid>
              <Input placeholder="LinkedIn" />
            </Grid>
            <Grid>
              <Input placeholder="GitHub" />
            </Grid>
            <Grid>
              <Select
                value="¿Qué haces actualmente?"
                >
                <MenuItem>Estudio</MenuItem>
                <MenuItem>Trabajo</MenuItem>
              </Select>
            </Grid>
            <Grid>
              <Select
                value="¿Cuál es tu nivel de ingles?"
                >
                <MenuItem>A1</MenuItem>
                <MenuItem>A2</MenuItem>
                <MenuItem>B1</MenuItem>
                <MenuItem>B2</MenuItem>
                <MenuItem>C1</MenuItem>
                <MenuItem>C2</MenuItem>
              </Select>
            </Grid>
            <Grid>
              <Select
                value="¿Cuál es tu especialidad?"
                >
                <MenuItem>Frontend</MenuItem>
                <MenuItem>Backend</MenuItem>
              </Select>
            </Grid>
          </Grid> 
          <Grid lg="4">
            IMG
          </Grid>
        </Grid>
      </Card>
    </Container>
  )
}

export default BasicInformation;
