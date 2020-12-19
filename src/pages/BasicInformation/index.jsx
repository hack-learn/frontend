import React, { useState } from 'react';
import { Card, Input, Select, MenuItem, Grid, Container, Button, InputLabel, CardContent } from '@material-ui/core';
import { Students } from '../../api';
import basic from '../../assets/img/basic.svg';

const styleInput = {
  width: '100%',
  marginBottom: '2.5px'
}

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
    Students.create(form).then((res) => {
      console.log(res.data)
      history.push('/diagnostic');
    })
    .catch(err => {
      console.log(err)
      // alert('Upss algo no salio bien')
      history.push('/diagnostic');
    })
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%'
      
    }}>
      <Card style={{
        width: '80%'
      }}>
        <CardContent>        
          <Grid 
            style={{
              display: 'flex',
              alignItems: 'center',
            }} 
            justify="space-between"
          >
            <Grid lg="6">
              <Input
                style={styleInput}
                placeholder="Nombre completo" 
                onChange={handleChange}
                name="first_name"
                value={form['first_name']}
              />
              <Input
                style={styleInput}
                placeholder="Correo electronico" 
                onChange={handleChange}
                name="email"
                value={form['email']}
              />
              <Input
                style={styleInput}
                placeholder="Pais" 
                onChange={handleChange}
                name="country"
                value={form['country']}
              />
              <Input
                style={styleInput}
                placeholder="Ciudad" 
                onChange={handleChange}
                name="city"
                value={form['city']}
              />
              <Input
                style={styleInput}
                placeholder="LinkedIn" 
                onChange={handleChange}
                name="linkedin"
                value={form['linkedin']}
              />
              <Input
                style={styleInput}
                placeholder="GitHub" 
                onChange={handleChange}
                name="github"
                value={form['github']}
              />
              <Grid style={{
                marginBottom: '10px',
                marginTop: '10px'
              }}>
                <InputLabel id="occupation">¿Qué haces actualmente?</InputLabel>
                <Select
                  style={styleInput}
                  labelId="occupation"
                  value={form['occupation']}
                  name="occupation"
                  onChange={handleChange}
                  >
                  <MenuItem value="estudio">Estudio</MenuItem>
                  <MenuItem value="trabajo">Trabajo</MenuItem>
                </Select>
              </Grid>
              <Grid style={{
                marginBottom: '10px'
              }}>
                <InputLabel id="english_level">¿Cuál es tu nivel de ingles?</InputLabel>
                <Select
                  style={styleInput}
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
              <Grid style={{
                marginBottom: '10px'
              }}>
                <InputLabel id="specialty">¿Cuál es tu especialidad?</InputLabel>
                <Select
                  style={styleInput}
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
            <Grid 
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%'
              }}
              lg="5"
            >
              <img 
                style={{
                  width: '100%',
                  height: '100%'
                }}
                src={basic}
                alt="basic profile"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

export default BasicInformation;
