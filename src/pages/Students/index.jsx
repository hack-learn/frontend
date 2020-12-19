import React, { useState, useEffect } from 'react';
import { Card, Grid } from '@material-ui/core';
import { Students as Service } from '../../api';
import studentCover from '../../assets/img/student.svg';

const Students = ({ history }) => {
  const [students, setStudents] = useState(false);
  const handleClick = () => {
    history.push('students/64289137')
  }

  useEffect(() => {
    Service.list()
    .then((res) => {
      console.log(res)
      setStudents(res);
    })
    .catch();
  }, []);

  if (!students) return <p>Cargando</p>
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#E5E5E5',
      overflowY: 'auto'
    }}>

      {
        students.map((student) => (
          <Card
            style={{
              display: 'flex',
              width: '50%',
              margin: 'auto',
              marginBottom: '28px',
              padding: '28px',
              borderRadius: '28px',
              cursor: 'pointer'
            }}
            onClick={handleClick}
          >
            <Grid lg="9">
              <h2 style={{
                marginBottom: '20px'
              }}>INFORMACION BÁSICA</h2>
              <p style={{
                marginBottom: '10px'
              }}>{student.first_name}</p>
              <p style={{
                marginBottom: '10px'
              }}>{student.email}</p>
              <p style={{
                marginBottom: '10px'
              }}>{student.country}</p>
              <p style={{
                marginBottom: '10px'
              }}>{student.specialty}</p>
            </Grid>
            <Grid
              style={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}
              lg="3"
            >
              <img
                style={{
                  width: '100%'
                }}
                src={studentCover}
                alt="student cover"
              />
            </Grid>
          </Card>
        ))
      }
    </div>
  );  
}

export default Students;