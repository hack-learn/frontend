import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody } from '@material-ui/core';

const user = {
  city: 'Neza',
  country: 'MX',
  email: 'wizardgerardo@gmail.com',
  english_level: 'b2',
  first_name: 'Gerardo',
  github: 'https://github.com/gnppro',
  last_name: '',
  linkedin: 'https://www.linkedin.com/in/gnppro/',
  occupation: 'trabajo',
  phone_number: '',
  specialty: 'backend',
  username: 'wizardgerardo@gmail.com',
}

const Detail = ({ student }) => {
  console.log(student);
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '60% 30%',
      gap: '10%',
      overflowY: 'auto',
      overflowX: 'hidden',
      width: '100%',
      height: '100%',
      backgroundColor: '#E5E5E5',
      padding: '50px'
    }}>
      <div style={{
        width: '100%',
      }}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Mes</TableCell>
                <TableCell align="right">Semana</TableCell>
                <TableCell>Curso</TableCell>
                <TableCell align="right">Duracion</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

      </div>
      <div style={{
        width: '100%'
      }}>
        <div>
          <h3 style={{ marginBottom: '10px' }}>Información basica</h3>
          <p style={{ marginBottom: '10px' }}>{user.first_name}</p>
          <p style={{ marginBottom: '10px' }}>{user.country}</p>
          <p style={{ marginBottom: '10px' }}>{user.city}</p>
          <p style={{ marginBottom: '10px' }}>{user.specialty}</p>
          <p style={{ marginBottom: '10px' }}>{user.occupation}</p>
          <p style={{ marginBottom: '10px' }}>{user.email}</p>
          <p style={{ marginBottom: '10px' }}>{user.linkedin}</p>
          <p style={{ marginBottom: '10px' }}>{user.github}</p>
          <p style={{ marginBottom: '10px' }}>{user.english_level}</p>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ width: '150px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '90px',
              height: '90px',
              backgroundColor: '#121D43',
              borderRadius: '50%',
              margin: 'auto'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '60px',
                height: '60px',
                backgroundColor: '#E5E5E5',
                borderRadius: '50%'
              }}>
                <p>5/10</p>
              </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '15px' }}>Tecnico</p>
          </div>
          <div style={{ width: '150px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '90px',
              height: '90px',
              backgroundColor: '#121D43',
              borderRadius: '50%',
              margin: 'auto'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '60px',
                height: '60px',
                backgroundColor: '#E5E5E5',
                borderRadius: '50%'
              }}>
                <p>5/10</p>
              </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '15px' }}>Ingles</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
