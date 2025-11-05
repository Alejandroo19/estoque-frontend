import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../services/api'
import type { Produto } from './useProdutos'

export const useCreateProduto = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (novoProduto: Produto) => {
      const response = await api.post('/produtos', novoProduto)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['produtos'] })
    },
  })
}
