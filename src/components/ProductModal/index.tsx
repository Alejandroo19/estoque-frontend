import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { useEffect, useState } from 'react'
import type { Produto } from '../../hooks/useProdutos'
import * as S from './styles'
import { useCreateProduto } from '../../hooks/useCreateProduto'
import { useUpdateProduto } from '../../hooks/useUdateProduto'

type ProductModalProps = {
  isVisible: boolean
  onHide: () => void
  productToEdit?: Produto | null
}

export const ProductModal = ({ isVisible, onHide, productToEdit }: ProductModalProps) => {
  const createMutation = useCreateProduto()
  const updateMutation = useUpdateProduto()

  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [categoria, setCategoria] = useState('')

  useEffect(() => {
    if (productToEdit) {
      setNome(productToEdit.nome)
      setPreco(productToEdit.preco.toString())
      setCategoria(productToEdit.categoria || '')
    } else {
      setNome('')
      setPreco('')
      setCategoria('')
    }
  }, [productToEdit])

  const handleSubmit = () => {
    const produto: Produto = {
      id: productToEdit?.id ?? 0,
      nome,
      preco: Number(preco),
      categoria,
    }

    if (productToEdit) {
      updateMutation.mutate(produto)
    } else {
      createMutation.mutate(produto)
    }

    onHide()
  }

  return (
    <Dialog
      header={productToEdit ? 'Editar Produto' : 'Cadastrar Produto'}
      visible={isVisible}
      onHide={onHide}
      style={{ width: '400px' }}
    >
      <S.FormContainer>
        <S.FieldGroup>
          <label htmlFor="nome">Nome</label>
          <InputText id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        </S.FieldGroup>

        <S.FieldGroup>
          <label htmlFor="preco">Preço</label>
          <InputText id="preco" value={preco} onChange={(e) => setPreco(e.target.value)} />
        </S.FieldGroup>

        <S.FieldGroup>
          <label htmlFor="categoria">Categoria</label>
          <InputText id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
        </S.FieldGroup>

        <S.ButtonsWrapper>
          <Button
            label={productToEdit ? 'Salvar alterações' : 'Cadastrar'}
            icon="pi pi-check"
            onClick={handleSubmit}
            loading={createMutation.isPending || updateMutation.isPending}
          />
        </S.ButtonsWrapper>
      </S.FormContainer>
    </Dialog>
  )
}
