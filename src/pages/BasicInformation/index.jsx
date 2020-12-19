import React, { useState } from 'react';
import { Card, Input, Select, MenuItem, Grid, Container, Button, InputLabel, CardContent } from '@material-ui/core';
import { Students } from '../../api';

const BasicInformation = ({ history }) => {
  const [form, setForm] = useState({
    first_name: '',
    email: '',
    country: '',
    city: '',
    linkedin: '',
    github: '',
    occupation: 'estudio',
    english_level: 'a1',
    specialty: 'frontend'
  });

  const handleChange = (e) => {
    console.log('CAMBIANDO', e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const handleSend = () => {
    //axios.post('https://hack-learning.herokuapp.com/users', form, )
    /*axios.post({
      uri: `https://hack-learning.herokuapp.com/users`,
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      data: form
    })*/
    Students.create(form).then((res) => {
      console.log(res.data)
      history.push('/diagnostic');
    })
    .catch(err => {
      console.log(err)
      // alert('Upss algo no salio bien')
      history.push('/diagnostic');
    })
    // Students.create(form);
  }

  return (
    <Container>
      <Card>
        <CardContent>        
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
                  value={form['occupation']}
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
                  value={form['english_level']}
                  name="english_level"
                  onChange={handleChange}
                  >
                  <MenuItem value="a1">A1</MenuItem>
                  <MenuItem value="a2">A2</MenuItem>
                  <MenuItem value="b1">B1</MenuItem>
                  <MenuItem value="b2">B2</MenuItem>
                  <MenuItem value="c1">C1</MenuItem>
                  <MenuItem value="c2">C2</MenuItem>
                </Select>
              </Grid>
              <Grid>
                <InputLabel id="specialty">¿Cuál es tu especialidad?</InputLabel>
                <Select
                  labelId="specialty"
                  value={form['specialty']}
                  name="specialty"
                  onChange={handleChange}
                  >
                  <MenuItem value="frontend">Frontend</MenuItem>
                  <MenuItem value="backend">Backend</MenuItem>
                </Select>
              </Grid>
              <Button onClick={handleSend}>Siguiente</Button>
            </Grid> 
            <Grid lg="4">
              IMG
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  )
}

export default BasicInformation;
