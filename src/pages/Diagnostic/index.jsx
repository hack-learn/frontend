import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent, Grid, Button } from '@material-ui/core';
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
      alert('Has completado el diagnostico');
      history.push('/');
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
    <div>
      <Container style={{}}>
        <Card>
          <CardContent style={{
            display: 'flex'
          }}>
              <Grid lg="5">
                <img src={test} alt=""/>
              </Grid>
              <Grid lg="7" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-end'
              }}>
                <div>
                  <p>{questions[count].description}</p>
                  <textarea placeholder="RESPUESTA" defaultValue={anwser} value={anwser} onChange={handleChange}></textarea>
                </div>
                <Button onClick={handleNextQuestion}>Siguiente</Button>
              </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default Diagnostic;