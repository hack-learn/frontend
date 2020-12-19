import React from 'react';
import logo from '../../assets/img/logo.png';
import women from '../../assets/img/women.png';
import search from '../../assets/img/search.png';
// import { useContext } from 'react';
// import StoreContext from '../../store';

const Home = () => {
  // const { globalState, dispatch } = useContext(StoreContext);

  return (
    <div>
        <div>
        <figure>
            <img src= { logo } alt="logo" />
          </figure>
        </div>
        <div>
          <h1>¿CONOCE TODO LO QUE
              NECESITA PARA TU RUTA
              DE APRENDIZAJE EFECTIVA?
          </h1>
          <p>
          Nuestro sistema de diagnostico te ayuda a 
          orientar tus objetivos, especialidad e intereses 
          para que tu aprendizaje sea significativo.
          </p>
          <button type="submit">COMENZAR AHORA</button>
        </div>
        <div>
          <figure>
            <img src= { women } alt="home-women" />
          </figure>
        </div>
        <section>
          <div>
            <h1>TOMA EL CONTROL DE TUS ESTUDIOS EN 2 PASOS</h1>
          </div>
          <div>
              <div>
              <figure>
                <img src= { search } alt="search" />
              </figure>
              <p>1. Escoge tu especialidad en Master y 
                    completa tu perfil para obtener tu diagnostico.
              </p>
              </div>
              <div>
              <figure>
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
