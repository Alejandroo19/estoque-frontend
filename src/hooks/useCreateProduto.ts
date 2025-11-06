import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../services/api'
import type { Produto, ProdutoPayload } from './useProdutos'

export const useCreateProduto = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (novoProduto: ProdutoPayload) => {
      const response = await api.post<Produto>('/produtos', novoProduto)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['produtos'] })
    },
  })
}
