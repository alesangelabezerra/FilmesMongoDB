import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { listar } from "../services/listar";

export function CadastrarFilmes() {
    return(
        <div>
            <form>
                <h3>Cadastrar filme</h3>
                <label htmlFor="name">Foto: </label>
                <input
                    type="text" 
                    name="name" 
                    id="name" 
                    value={nome} 
                    onChange={(e) => {
                    setNome(e.target.value)
                }} />

                <label htmlFor="name">Nome do filme: </label>
                <input
                    type="text" 
                    name="name" 
                    id="name" 
                    value={nome} 
                    onChange={(e) => {
                    setNome(e.target.value)
                }} />

                <label htmlFor="name">Ano: </label>
                <input
                    type="text" 
                    name="name" 
                    id="name" 
                    value={nome} 
                    onChange={(e) => {
                    setNome(e.target.value)
                }} />

                <label htmlFor="name">Gênero: </label>
                <input
                    type="text" 
                    name="name" 
                    id="name" 
                    value={nome} 
                    onChange={(e) => {
                    setNome(e.target.value)
                }} />
                <label htmlFor="name">Atores principais: </label>
                <input
                    type="text" 
                    name="name" 
                    id="name" 
                    value={nome} 
                    onChange={(e) => {
                    setNome(e.target.value)
                }} />
                <label htmlFor="name">Sinopse: </label>
                <input
                    type="text" 
                    name="name" 
                    id="name" 
                    value={nome} 
                    onChange={(e) => {
                    setNome(e.target.value)
                }} />
          </form>
        </div>
    )
}

  //foto, nome, ano, genero , atoresprincipais, sinopse.