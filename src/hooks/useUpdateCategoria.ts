import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../services/api'
import type { Categoria } from './useCategorias'

export const useUpdateCategoria = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (categoria: Categoria) => {
      const response = await api.put(`/categorias/${categoria.id}`, categoria)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categorias'] })
    },
  })
}