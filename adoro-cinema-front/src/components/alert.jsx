import React, { useState } from 'react';

export function Alerta({ mensagem, closeAlert, borderColor, backgroundColor }){
  return (
    <div style={{ border: `2px solid ${borderColor}`, padding: '10px', margin: '10px', backgroundColor: backgroundColor }}>
      <p>{mensagem}</p>
      <button onClick={closeAlert}>Fechar</button>
    </div>
  );
};