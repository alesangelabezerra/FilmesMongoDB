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
           <div>
                {filmes.map((elem, index) => (
                    <div key={index}>
                        <h2>{elem.nome}</h2>
                        <span>{elem.genero}</span>
                        <div id="btn-atuailiza-delete">
                            <button type="button">atualizar</button>
                            <button
                             type="button"
                             onClick={() => deletFilme(elem._id)}
                             >deletar</button>
                        </div>
                        <img src={"http://localhost:3000/files/" + elem.imagem} alt="" />
                        <p>{elem.sinopse}</p>
                    </div>
                ))} 
            </div>
        </div>
    )
}

  //foto, nome, ano, genero , atoresprincipais, sinopse.