import { api } from "./api";

export async function listar() {
    try {
        return await api.get('/filmes')
    } catch (error) {
        throw new Error(`Erro na requisição: ${error}`);
    }
}