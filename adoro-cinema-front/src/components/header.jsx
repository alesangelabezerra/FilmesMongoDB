import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { buscarPorNome } from '../services/buscar';

export function Header() {

  const [nomeFime, setNomeFilme] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await buscarPorNome(nomeFime)
    console.log(res);
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/cadastrarFilmes">Cadastrar Filme</Link></li>
          <li><Link to="/listarGeneros">Generos</Link></li>
          <li>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="search"
                placeholder="Pesquisar"
                value={nomeFime}
                onChange={(e) => setNomeFilme(e.target.value)}
              />
              <button type="button"
              onClick={handleSubmit}
              >
                <span role="img" aria-label="search-icon">🔍</span>
              </button>
            </form>
          </li>
        </ul>
      </nav>
    </header>
  );
}