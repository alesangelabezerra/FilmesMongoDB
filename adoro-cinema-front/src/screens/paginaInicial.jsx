import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { listar } from "../services/listar";

export function PaginaInicial() {
    const [foto, setFoto] = useState("")
    const [nome, setNome] = useState("")
    const [ano, setAno] = useState(0)
    const [genero, setGenero] = useState("")
    const [atores, setAtores] = useState([])
    const [ator, setAtor] = useState("")
    const [sinopse, setSinopse] = useState("")
    
    function addItem() {
        const novaLista = [...atores];
        novaLista.push(ator);
        setAtores(novaLista);
        setAtor("")
        console.log(atores)
      }


    return(
        <div>
            <h2>Cadastrar Filmes</h2>
            <form>
                <h3>Cadastrar filme</h3>
                <label htmlFor="name">Foto: </label>
                <input
                    type="text" 
                    name="foto" 
                    id="foto" 
                    value={foto} 
                    onChange={(e) => {
                    setFoto(e.target.value)
                }} />

                <label htmlFor="name">Nome do filme: </label>
                <input
                    type="text" 
                    name="nome" 
                    id="nome" 
                    value={nome} 
                    onChange={(e) => {
                    setNome(e.target.value)
                }} />

                <label htmlFor="name">Ano: </label>
                <input
                    type="" 
                    name="ano" 
                    id="ano" 
                    value={ano} 
                    onChange={(e) => {
                    setAno(e.target.value)
                }} />

                <label htmlFor="name">Gênero: </label>
                <input
                    type="text" 
                    name="genero" 
                    id="genero" 
                    value={genero} 
                    onChange={(e) => {
                    setGenero(e.target.value)
                }} />
                <label htmlFor="name">Atores principais: </label>
                <input
                    type="text" 
                    name="atores" 
                    id="atores" 
                    value={ator} 
                    onChange={(e) => {
                    setAtor(e.target.value)
                }} />

                <button onClick={addItem} type="button"> Cadastrar ator</button>

                <label htmlFor="name">Sinopse: </label>
                <input
                    type="text" 
                    name="name" 
                    id="name" 
                    value={sinopse} 
                    onChange={(e) => {
                    setSinopse(e.target.value)
                }} />
          </form>
        </div>
    )
}

  //foto, nome, ano, genero , atoresprincipais, sinopse.