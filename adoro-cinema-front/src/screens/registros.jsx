import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { listar } from "../services/listar";

export function Registros() {

    const [registros, setRegistros] = useState(null)
    const [loading, setLoading] = useState(true);


    // const getRegistros = () => {
    //     listar()
    //     setRegistros(d)
    // }

    useEffect(() => {
        listar()
        .then((res) => {
            setRegistros(res.data)
            setLoading(false)
        })
        .catch((erro) => console.log(">>>", erro))
      }, []);


    return (
        <div id="main-registros">
            <h1>Registros anteriores</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : 
                <div>
                    {registros.map((elem, index) => (
                        <div key={index}>
                            <div>{elem.name}</div>
                        </div>
                    ))} 
                </div>
            }

            <Link id="link-to-home" to={"/"}>voltar a tela inicial</Link>
        </div>
    )
}