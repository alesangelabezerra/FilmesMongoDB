import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/cadastrarFilmes">Cadastrar Filme</Link></li>
          <li><Link to="/pesquisar">Procurar</Link></li>
          <li><Link to="/listarGeneros">Generos</Link></li>
        </ul>
      </nav>
    </header>
  );
};