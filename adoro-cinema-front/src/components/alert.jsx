import React, { useState } from 'react';

export function Alerta({ mensagem, closeAlert, borderColor, backgroundColor }){
  return (
    <div id="alerta" style={{ 
      border: `0px solid ${borderColor}`,
       backgroundColor: backgroundColor,
      }}>
      <p>{mensagem}</p>
      <button id='cose-alert' onClick={closeAlert}></button>
    </div>
  );
};