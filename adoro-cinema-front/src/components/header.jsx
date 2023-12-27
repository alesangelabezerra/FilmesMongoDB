import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header style={{backgroundColor: "#eee"}}>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/cadastrarFilmes">Cadastrar Filme</Link></li>
          <li><Link to="/procurar">Procurar</Link></li>
        </ul>
      </nav>
    </header>
  );
};