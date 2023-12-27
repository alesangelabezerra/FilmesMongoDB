import { api } from "./api";

export async function buscarPorGenero(genero) {
    try {
        return await api.get(`/filmes/genero/${genero}`)
    } catch (error) {
        throw new Error(`Erro na requisição: ${error}`);
    }
}