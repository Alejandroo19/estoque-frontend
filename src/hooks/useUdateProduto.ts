import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../services/api'
import type { Produto } from './useProdutos'

export const useUpdateProduto = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (produto: Produto) => {
      const response = await api.put(`/produtos/${produto.id}`, produto)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['produtos'] })
    },
  })
}