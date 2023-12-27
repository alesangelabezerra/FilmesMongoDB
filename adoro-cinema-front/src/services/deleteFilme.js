import { api } from "./api";

export async function deletarFilme(id) {
    try {
        return await api.delete(`/filmes/${id}`)
    } catch (error) {
        throw new Error(`Erro na requisição: ${error}`);
    }
}