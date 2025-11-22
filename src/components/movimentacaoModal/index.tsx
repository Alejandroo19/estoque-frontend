import { useState } from 'react'
import { useProdutos } from '../../hooks/useProdutos'
import * as S from './styles'
import { Toast } from 'primereact/toast'
import { useRef } from 'react'
import { useCreateMovimentacao } from '../../hooks/useCreateMovimentacao'
import type { AxiosError } from 'axios'

type MovimentacaoModalProps = {
  isVisible: boolean
  onHide: () => void
}

export const MovimentacaoModal = ({ isVisible, onHide }: MovimentacaoModalProps) => {
  const { data: produtos } = useProdutos()
  const createMutation = useCreateMovimentacao()
  const toast = useRef<Toast>(null)

  const [produtoId, setProdutoId] = useState<number | null>(null)
  const [quantidade, setQuantidade] = useState<number>(0)
  const [tipo, setTipo] = useState<'ENTRADA' | 'SAIDA' | null>(null)

  const handleSubmit = () => {
    if (!produtoId || !tipo || quantidade <= 0) {
      toast.current?.show({
        severity: 'error',
        summary: 'Erro de Validação',
        detail: 'Preencha todos os campos corretamente.',
        life: 3000,
      })
      return
    }

    // Find the selected product to check min/max quantities
    const produtoSelecionado = produtos?.find(p => p.id === produtoId)

    if (produtoSelecionado) {
      const estoqueAtual = produtoSelecionado.quantidadeEstoque
      const quantidadeMinima = produtoSelecionado.quantidadeMinima ?? 0
      const quantidadeMaxima = produtoSelecionado.quantidadeMaxima ?? 0

      let novoEstoque = estoqueAtual

      if (tipo === 'ENTRADA') {
        novoEstoque = estoqueAtual + quantidade

        if (quantidadeMaxima > 0 && novoEstoque > quantidadeMaxima) {
          toast.current?.show({
            severity: 'warn',
            summary: 'Atenção',
            detail: `O estoque ficará acima do máximo (${quantidadeMaxima}). Novo estoque: ${novoEstoque}`,
            life: 4000,
          })
        }
      } else if (tipo === 'SAIDA') {
        novoEstoque = estoqueAtual - quantidade

        if (quantidadeMinima > 0 && novoEstoque < quantidadeMinima) {
          toast.current?.show({
            severity: 'warn',
            summary: 'Atenção',
            detail: `O estoque ficará abaixo do mínimo (${quantidadeMinima}). Novo estoque: ${novoEstoque}`,
            life: 4000,
          })
        }
      }
    }

    createMutation.mutate(
      { produto: { id: produtoId }, tipo, quantidade },
      {
        onSuccess: () => {
          toast.current?.show({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Movimentação registrada com sucesso!',
            life: 3000,
          })
          onHide()
        },
        onError: (error: AxiosError<{ message: string }>) => {
          const apiMessage = error.response?.data?.message ?? 'Erro ao registrar movimentação.'

          toast.current?.show({
            severity: 'warn',
            summary: 'Aviso',
            detail: apiMessage,
            life: 3000,
          })
        },
      }
    )
  }
  return (
    <>
      <Toast ref={toast} />
      <S.StyledDialog
        header="Registrar Movimentação"
        visible={isVisible}
        onHide={onHide}
        draggable={false}
        style={{ width: '400px' }}
      >
        <S.FormContainer>
          <S.FieldGroup>
            <label>Produto</label>
            <S.StyledDropdown
              value={produtoId}
              options={produtos?.map((p) => ({ label: p.nome, value: p.id })) || []}
              onChange={(e) => setProdutoId(e.value)}
              placeholder="Selecione um produto"
              appendTo="self"
            />
          </S.FieldGroup>

          <S.FieldGroup>
            <label>Tipo</label>
            <S.StyledDropdown
              value={tipo}
              options={[
                { label: 'Entrada', value: 'ENTRADA' },
                { label: 'Saída', value: 'SAIDA' },
              ]}
              onChange={(e) => setTipo(e.value)}
              placeholder="Selecione o tipo"
              appendTo="self"
            />
          </S.FieldGroup>

          <S.FieldGroup>
            <label>Quantidade</label>
            <S.StyledInput value={quantidade} onValueChange={(e) => setQuantidade(e.value || 0)} />
          </S.FieldGroup>

          <S.ButtonsWrapper>
            <S.StyledButton label="Registrar" icon="pi pi-check" onClick={handleSubmit} />
          </S.ButtonsWrapper>
        </S.FormContainer>
      </S.StyledDialog>
    </>
  )
}
