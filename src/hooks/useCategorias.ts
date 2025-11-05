import { useQuery } from '@tanstack/react-query'
import { api } from '../services/api'

export type Categoria = {
  id: number
  nome: string
  tamanho?: string
  embalagem?: string
}

const fetchCategorias = async (): Promise<Categoria[]> => {
  const response = await api.get('/categorias')
  return response.data
}

export const useCategorias = () => {
  return useQuery({
    queryKey: ['categorias'],
    queryFn: fetchCategorias,
  })
}
