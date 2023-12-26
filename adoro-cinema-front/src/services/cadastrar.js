import { api } from "./api";

export async function cadastrar() {
    try {
        return await api.post('/cadastrar', {
            // firstName: 'Santos',
            // lastName: 'Dumont'
        })
    } catch (error) {
        throw new Error(`Erro na requisição: ${error}`);
    }
}