import { api } from "./api";

export async function buscarPorGenero(genero) {
    try {
        return await api.get(`/filmes/genero/${genero}`)
    } catch (error) {
        throw new Error(`Erro na requisição: ${error}`);
    }
}


export async function buscarPorNome(nome) {
    try {
        return await api.post(`/filmes/buscar/`, {
            name: nome
        })
    } catch (error) {
        throw new Error(`Erro na requisição: ${error}`);
    }
}