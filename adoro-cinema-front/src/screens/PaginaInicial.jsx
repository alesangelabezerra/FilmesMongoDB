import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Header } from "../components/header";
import { listar } from "../services/listar";
import { deletarFilme } from "../services/deleteFilme";

export function PaginaInicial() {

    const [filmes, setFilmes] = useState([])

    async function listarFilmes() {
        const res = await listar()
        setFilmes(res.data)
    }

    async function deletFilme(id) {
        const res = await deletarFilme(id)
        listarFilmes()
        console.log(res);
    }

    useEffect(() => {
       listarFilmes()
      }, []);

    return(
        <div>
            <Header />
           <div className="backgroung">
           {filmes.map((elem, index) => (
            <div key={index} className="movie-card">

                <h2>{elem.nome}</h2>

                <span><strong>Genero: </strong>{elem.genero}</span>

                <span>
                    <strong>Atores: </strong>{
                        elem.atoresPrincipais.map((e, i) => <span>{e}</span>)}
                </span>

                <div id="btn-atualiza-delete" className="button-container">

                <button type="button" onClick={() => atualizarFilme(elem._id)}>
                    Atualizar
                </button>

                <button type="button" onClick={() => deletarFilme(elem._id)}>
                    Deletar
                </button>
                </div>

                <img src={"http://localhost:3000/files/" + elem.imagem} alt="" />
                <p>  <strong>Sinopse: </strong> <br/> {elem.sinopse}</p>
            </div>
            ))}
            </div>
        </div>
    )
}

  //foto, nome, ano, genero , atoresprincipais, sinopse.