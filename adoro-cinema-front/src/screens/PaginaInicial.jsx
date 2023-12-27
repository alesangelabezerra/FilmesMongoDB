import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Header } from "../components/header";

export function PaginaInicial() {
    return(
        <div>
            <Header />
           <h1>Pagina inicial</h1>
        </div>
    )
}

  //foto, nome, ano, genero , atoresprincipais, sinopse.