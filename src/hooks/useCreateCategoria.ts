import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../services/api'
import type { Categoria } from './useCategorias'

export const useCreateCategoria = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (novaCategoria: Omit<Categoria, 'id'>) => {
      const response = await api.post('/categorias', novaCategoria)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categorias'] })
    },
  })
}
