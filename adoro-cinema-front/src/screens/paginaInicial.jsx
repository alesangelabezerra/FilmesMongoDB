import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Alerta } from "../components/alert";

import { cadastrarFilme } from "../services/cadastrarFilme";

export function PaginaInicial() {
    const [foto, setFoto] = useState(null)
    const [nome, setNome] = useState("")
    const [ano, setAno] = useState(0)
    const [genero, setGenero] = useState("")
    const [atores, setAtores] = useState([])
    const [ator, setAtor] = useState("")
    const [sinopse, setSinopse] = useState("")

    const [msg, setMsg] = useState(false)
    const [exibAlerta, setExibAlerta] = useState(false)
    const [colorAlert, setColorAlert] = useState("blue")
    const [borderColor, setBorderColor] = useState("blue")
  

    
    function addItem() {
        const novaLista = [...atores];
        novaLista.push(ator);
        setAtores(novaLista);
        setAtor("")
        console.log(atores)
      }

      function handleFileChange(e) {
        setFoto(e.target.files[0]);
      }

      const closeAlert = () => {
        setExibAlerta(false);
      };
    

    async function cadastrarPostagemFilme() {

        if (nome == "" || atores.length == 0 || genero == "" || sinopse == ""  || foto == null) {
            console.log("ssss");
            setExibAlerta(true)
            setMsg("Atencao! Preencha todos os campos")
            setBorderColor("#E60E20")
            setColorAlert("#FF1919")
            window.scrollTo({top: 0})
            return
        }

        const formData = new FormData()

        formData.append('nome', nome)
        formData.append('atoresPrincipais', atores.join(', '))
        formData.append('genero', genero)
        formData.append('sinopse', sinopse)
        formData.append('image', foto)


        const res = await cadastrarFilme(formData)

        console.log(res);
        if(res.status != 201) {
            console.log("ssss");
            setExibAlerta(true)
            setBorderColor("#E60E20")
            setColorAlert("#FF1919")
            setMsg("Erro na requisicao")
            window.scrollTo({top: 0})

            return
        }
        
        setExibAlerta(true)
        setBorderColor("#0A3311")
        setColorAlert("#2BE049")
        setMsg("Postagem de filme cadastrada")
        window.scrollTo({top: 0})
        
    }


    return(
        <div>

            {
            exibAlerta && <Alerta
                            mensagem={msg} 
                            closeAlert={closeAlert}
                            borderColor={borderColor}
                            backgroundColor={colorAlert}
                            />
            }
   

            <h2>Cadastrar Filmes</h2>
            <form>
                <h3>Cadastrar filme</h3>
                <label htmlFor="name">Foto: </label>
                <input
                    type="file" 
                    name="foto" 
                    id="foto" 
                    onChange={handleFileChange} />

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

                <button onClick={addItem} type="button"> Adcionar ator</button>

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

          <button onClick={cadastrarPostagemFilme} type="button">Postar publicacao</button>

        </div>
    )
}

  //foto, nome, ano, genero , atoresprincipais, sinopse.