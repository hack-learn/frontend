import React from 'react';
import logo from '../../assets/img/logo.png';
import women from '../../assets/img/women.png';
import search from '../../assets/img/search.png';
import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import StoreContext from '../../store';

const Home = () => {
  // const { globalState, dispatch } = useContext(StoreContext);


  return (
    
    <div style= {{
      margin: '0 auto',
      padding: '20px',
      width: '100%',
      height: '100%',
      fontFamily: 'Helvetica',
      backgroundColor: '#E5E5E5'
    }}>
        <div>
          <figure>
            <img src= { logo }  alt="logo" />
          </figure>
        </div>
        <div style= {{
          marginTop: '50px'
        }}>
          <h1 style= {{
            marginBottom: '20px',
            width: '50%'
          }}>¿CONOCE TODO LO QUE
              NECESITA PARA TU RUTA
              DE APRENDIZAJE EFECTIVA?
          </h1>
          <p style= {{
              width: '50%',
              marginBottom: '50px'
          }}>
          Nuestro sistema de diagnostico te ayuda a 
          orientar tus objetivos, especialidad e intereses 
          para que tu aprendizaje sea significativo.
          </p>
          
          <Link to="/basic-information">COMENZAR AHORA</Link>
        </div>
        <div>
          <figure style= {{
            position: 'absolute',
            width: '254px',
            height: '353px',
            left: '1059px',
            top: '100px'
          }}>
            <img src= { women } alt="home-women" />
          </figure>
        </div>
        
        <section>
          <div style= {{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '100px',
            marginBottom: '20px'
          }}>
            <h1>TOMA EL CONTROL DE TUS ESTUDIOS EN 2 PASOS</h1>
          </div>
          <div style= {{
            display: 'flex',
          }}>
              <div style= {{
                padding: '20px',
                textAlign: 'center'
              }}>
              <figure style= {{
                 marginBottom: '20px'
              }}>
                <img src= { search } alt="search" />
              </figure>
              <p>1. Escoge tu especialidad en Master y 
                    completa tu perfil para obtener tu diagnostico.
              </p>
              </div>
              <div style= {{
                padding: '20px',
                textAlign: 'center'
              }}>
              <figure style= {{
                marginBottom: '20px'
              }}>
                <img src= { search } alt="search" />
              </figure>
              <p>2. Crearemos tu Learning Path para lograr
                    tus objetivos, con guías, herramientas y 
                    material del programa. 
              </p>
              </div>
          </div>
        </section>
    </div>
    
  );
};

export default Home;
