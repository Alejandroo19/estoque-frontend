import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../services/api'

export const useDeleteProduto = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/produtos/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['produtos'] })
    },
  })
}
