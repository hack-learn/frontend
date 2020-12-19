import React, { useState } from 'react';
import { Container, Card, Grid } from '@material-ui/core';
// import { Students } from '../../api';
import studentCover from '../../assets/img/student.svg';

const Students = () => {
  const [students, setStudents] = useState([0,1,2,3,4,5,6]);

  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#E5E5E5',
      overflowY: 'auto'
    }}>

      {
        students.map(() => (
          <Card style={{
            display: 'flex',
            width: '60%',
            margin: 'auto',
            marginBottom: '20px',
            padding: '28px',
            borderRadius: '28px'
          }}>
            <Grid lg="8">
              <h1>INFORMACION BÁSICA</h1>
              <p>Francisco Gustavo</p>
              <p>Ser desarollador full stack</p>
            </Grid>
            <Grid
              style={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}
              lg="4"
            >
              <img src={studentCover} alt="student cover"/>
            </Grid>
          </Card>
        ))
      }
    </div>
  );  
}

export default Students;