import { useQuery } from '@tanstack/react-query'
import { api } from '../services/api'

export type Produto = {
  id: number
  nome: string
  precoUnitario: number
  unidade: string
  quantidadeEstoque: number
  quantidadeMinima?: number
  quantidadeMaxima?: number
  categoria: { id: number; nome?: string } | null
}

export type ProdutoPayload = Omit<Produto, 'id'> & { id?: number | null }

const fetchProdutos = async (): Promise<Produto[]> => {
  const response = await api.get<
    {
      id: number
      nome: string
      preco?: number
      precoUnitario?: number
      categoria?: string
      quantidadeEstoque?: number
      quantidadeMinima?: number
      quantidadeMaxima?: number
    }[]
  >('/produtos')

  return response.data.map((p) => ({
    id: p.id,
    nome: p.nome,
    precoUnitario: p.precoUnitario ?? p.preco ?? 0,
    unidade: 'un',
    quantidadeEstoque: p.quantidadeEstoque ?? 0,
    quantidadeMinima: p.quantidadeMinima ?? 0,
    quantidadeMaxima: p.quantidadeMaxima ?? 0,
    categoria: p.categoria
      ? { id: 0, nome: p.categoria }
      : null,
  }))
}


export const useProdutos = () => {
  return useQuery({
    queryKey: ['produtos'],
    queryFn: fetchProdutos,
  })
}
