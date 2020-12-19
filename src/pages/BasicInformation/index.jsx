import React, { useState } from 'react';
import { Card, Input, Select, MenuItem, Grid, Container, Button, InputLabel, Item } from '@material-ui/core';
import { Students } from '../../api';

const BasicInformation = () => {
  const [form, setForm] = useState({
    first_name: '',
    email: '',
    country: '',
    city: '',
    linkedin: '',
    github: '',
  });

  const handleChange = (e) => {
    console.log('CAMBIANDO', e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const handleSend = () => {
    Students.create(form);
  }

  return (
    <Container>
      <Card>
        <Grid style={{
          display: 'flex'
        }} justify="space-between">
          <Grid lg="8">
            <Grid>
              <Input
                placeholder="Nombre completo" 
                onChange={handleChange}
                name="first_name"
                value={form['first_name']}
              />
            </Grid>
            <Grid>
              <Input
                placeholder="Correo electronico" 
                onChange={handleChange}
                name="email"
                value={form['email']}
              />
            </Grid>
            <Grid>
              <Input
                placeholder="Pais" 
                onChange={handleChange}
                name="country"
                value={form['country']}
              />
            </Grid>
            <Grid>
              <Input
                placeholder="Ciudad" 
                onChange={handleChange}
                name="city"
                value={form['city']}
              />
            </Grid>
            <Grid>
              <Input
                placeholder="LinkedIn" 
                onChange={handleChange}
                name="linkedin"
                value={form['linkedin']}
              />
            </Grid>
            <Grid>
              <Input
                placeholder="GitHub" 
                onChange={handleChange}
                name="github"
                value={form['github']}
              />
            </Grid>
            <Grid>
              <InputLabel id="occupation">¿Qué haces actualmente?</InputLabel>
              <Select
                labelId="occupation"
                value="estudio"
                name="occupation"
                onChange={handleChange}
                >
                <MenuItem value="estudio">Estudio</MenuItem>
                <MenuItem value="trabajo">Trabajo</MenuItem>
              </Select>
            </Grid>
            <Grid>
              <InputLabel id="english_level">¿Cuál es tu nivel de ingles?</InputLabel>
              <Select
                labelId="english_level"
                value="A1"
                name="english_level"
                onChange={handleChange}
                >
                <MenuItem value="A1">A1</MenuItem>
                <MenuItem value="A2">A2</MenuItem>
                <MenuItem value="B1">B1</MenuItem>
                <MenuItem value="B2">B2</MenuItem>
                <MenuItem value="C1">C1</MenuItem>
                <MenuItem value="C2">C2</MenuItem>
              </Select>
            </Grid>
            <Grid>
              <InputLabel id="specialty">¿Cuál es tu especialidad?</InputLabel>
              <Select
                labelId="specialty"
                value="Frontend"
                name="specialty"
                onChange={handleChange}
                >
                <MenuItem value="Frontend">Frontend</MenuItem>
                <MenuItem value="Backend">Backend</MenuItem>
              </Select>
            </Grid>
            <Button onClick={handleSend}>Siguiente</Button>
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
