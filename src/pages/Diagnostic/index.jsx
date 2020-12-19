import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Button, TextField } from '@material-ui/core';
import { Questions } from '../../api';
import test from '../../assets/img/test.svg';

const Diagnostic = ({ history }) => {
  const [questions, setQuestions] = useState(false);
  const [count, setCount] = useState(0);
  const [anwser, setAnwser] = useState('');

  useEffect(() => {
    Questions.list()
      .then((data) => {
        setQuestions(data);
      })
      .catch(() => {

      });
  }, []);

  const handleNextQuestion = () => {
    if (count === questions.length - 1) {
      // alert('Has completado el diagnostico');
      history.push('/diagnostic/success');
    } else {
      setCount(count + 1);
      setAnwser('');
    }
  }
  const handleChange = (e) => {
    setAnwser(e.target.value);
  }

  if (!questions) return <h1>Cargando...</h1>;
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: '#E5E5E5'
    }}>
      <Card style={{
        width: '80%',
        borderRadius: '28px'
      }}>
        <CardContent style={{
          display: 'flex'
        }}>
            <Grid lg="6">
              <img
                style={{
                  width: '100%'
                }}
                src={test}
                alt=""
              />
            </Grid>
            <Grid lg="6" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              padding: '28px'
            }}>
              <div style={{
                width: '100%'
              }}>
                <p style={{
                  fontSize: '28px'
                }}>
                  {questions[count].description}
                </p>
                <div style={{
                  marginTop: '90px'
                }}>
                  <TextField
                    style={{
                      width: '90%'
                    }}
                    placeholder="Respuesta"
                    multiline
                    value={anwser} 
                    onChange={handleChange}
                  />
                </div>
              </div>
              <Button 
                style={{
                  fontWeight: 'bold'
                }}
                onClick={handleNextQuestion}
              >
                Siguiente
              </Button>
            </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default Diagnostic;