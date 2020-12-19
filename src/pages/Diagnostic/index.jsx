import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Button, TextField } from '@material-ui/core';
import { Questions, Anwsers } from '../../api';
import test from '../../assets/img/test.svg';
import frontedPicture from '../../assets/img/frontend.jpg';
import backendPicture from '../../assets/img/backend.jpg';

const Diagnostic = ({ history, location }) => {
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
    console.log('NEXT')
    if (anwser === '' || !anwser) {
      return alert('Por favor responde la pregunta');
    }
    if (count === questions.length - 1) {
      // alert('Has completado el diagnostico');
      history.push('/diagnostic/success');
    } else {
      Anwsers.create({
        user_id: location.search.substr(6), 
        question_id: questions[count].id,
        anwser
      })
        .then(() => {
          setCount(count + 1);
          setAnwser('');
        })
        .catch();
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
      backgroundColor: '#E5E5E5',
      overflowY: 'auto'
    }}>
      <Card style={{
        width: '80%',
        borderRadius: '28px'
      }}>
        <CardContent style={{
          display: 'flex'
        }}>
            <Grid lg="6">
              {questions[count].category === 'frontend' ? <img style={{width: '100%', height: '389px'}} src={frontedPicture} alt="" /> : null}
              {questions[count].category === 'backend' ? <img style={{width: '100%', height: '389px'}} src={backendPicture} alt="" /> : null}
              {questions[count].category === 'soft' ? <img style={{width: '100%', height: '389px'}} src={test} alt="" /> : null}
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
                  marginTop: '80px'
                }}>
                  {
                    !questions[count].options
                      ? (<TextField
                        style={{
                          width: '90%'
                        }}
                        placeholder="Respuesta"
                        multiline
                        value={anwser} 
                        onChange={handleChange}
                      />)
                      : (
                        <div style={{
                          display:'grid'
                        }}>
                          {
                            questions[count].options.map((option) => (
                              <Button style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                marginBottom: '10px'
                              }}
                              key={option}
                              onClick={() => setAnwser(option)}
                              >{option}</Button>
                            ))
                          }
                        </div>
                      )
                  }
                  
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