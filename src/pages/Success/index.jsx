import React from 'react';
import successDiagnostic from '../../assets/img/success.svg';

const Success = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        width: '80%'
      }}>
        <div >
          <img 
            style={{
              width: '100%'
            }}
            src={successDiagnostic}
            alt="Success Diagnostic"
          />
        </div>
        <div>
          <p style={{ 
            fontSize: '56px',
            textAlign: 'center',
            color: '#5F60A7'
          }} >Tu registro se completó con éxito</p>
        </div>
      </div>
    </div>
  );
}

export default Success;
