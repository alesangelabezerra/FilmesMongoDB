import { api } from "./api";

export async function listar() {
    try {
        return await api.get('/filmes')
    } catch (error) {
        throw new Error(`Erro na requisição: ${error}`);
    }
}

export async function listarGeneros() {
    try {
        return await api.get('/filmes/get-generos')
    } catch (error) {
        throw new Error(`Erro na requisição: ${error}`);
    }
}


