import { useQuery } from '@tanstack/react-query'
import { api } from '../services/api'

export type Produto = {
  id: number
  nome: string
  preco: number
  categoria: string
}

const fetchProdutos = async (): Promise<Produto[]> => {
  const response = await api.get('/produtos')
  return response.data
}

export const useProdutos = () => {
  return useQuery({
    queryKey: ['produtos'],
    queryFn: fetchProdutos,
  })
}
