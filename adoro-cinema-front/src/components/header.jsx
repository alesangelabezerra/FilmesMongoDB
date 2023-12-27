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

      <h1>AssisteFlix</h1>
      <nav>
        <ul>
          <li><Link className='links' to="/">Início</Link></li>
          <li><Link className='links' to="/cadastrarFilmes">Cadastrar Filme</Link></li>
          <li><Link className='links' to="/listarGeneros">Generos</Link></li>
        </ul>
      </nav>

      <form onSubmit={handleSubmit}>
            <input
                id='input-search'
                type="text"
                name="search"
                placeholder="Pesquisar"
                value={nomeFime}
                onChange={(e) => setNomeFilme(e.target.value)}
              />
              <button
                id='btn-search'
                type="button"
                onClick={handleSubmit}
              >
                <span role="img" aria-label="search-icon">🔍</span>
              </button>
          </form>

    </header>
  );
}