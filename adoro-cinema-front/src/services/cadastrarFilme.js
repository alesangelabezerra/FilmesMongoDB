import { api } from "./api";

export async function cadastrarFilme(form) {
    try {
        return await api.post('/filmes', form)
    } catch (error) {
        throw new Error(`Erro na requisição: ${error}`);
    }
}