import { useEffect, useState } from 'react'
import type { Produto, ProdutoPayload } from '../../hooks/useProdutos'
import * as S from './styles'
import { useCreateProduto } from '../../hooks/useCreateProduto'
import { useUpdateProduto } from '../../hooks/useUdateProduto'
import { useCategorias } from '../../hooks/useCategorias'

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
  const [categoria, setCategoria] = useState<number | null>(null)

  const { data: categorias } = useCategorias()

useEffect(() => {
  if (productToEdit) {
    setNome(productToEdit.nome ?? '');

    const precoSeguro =
      typeof productToEdit.precoUnitario === 'number'
        ? productToEdit.precoUnitario.toString()
        : '';

    setPreco(precoSeguro);

    const categoriaCorrespondente = categorias?.find(
      (cat) => cat.id === productToEdit.categoria?.id ||
               cat.nome === productToEdit.categoria?.nome
    );

    setCategoria(categoriaCorrespondente?.id ?? null);
  } else {
    setNome('');
    setPreco('');
    setCategoria(null);
  }
}, [productToEdit, categorias]);

  const handleSubmit = () => {
    const precoNumber = parseFloat(preco)
    if (isNaN(precoNumber) || precoNumber <= 0) {
      alert('Por favor, insira um preço válido.')
      return
    }

  const produtoPayload: ProdutoPayload = {
    id: productToEdit?.id ?? undefined,
    nome,
    precoUnitario: precoNumber,
    unidade: 'un',
    quantidadeEstoque: 0,
    quantidadeMinima: 0,
    quantidadeMaxima: 0,
    categoria: categoria ? { id: categoria } : null,
  }

  if (productToEdit) {
    updateMutation.mutate(produtoPayload as Produto)
  } else {
    createMutation.mutate(produtoPayload)
  }

    onHide()
  }

  return (
    <S.StyledDialog
      header={productToEdit ? 'Editar Produto' : 'Cadastrar Produto'}
      visible={isVisible}
      onHide={onHide}
      style={{ width: '400px' }}
    >
      <S.FormContainer>
        <S.FieldGroup>
          <label htmlFor="nome">Nome</label>
          <S.StyledInput id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        </S.FieldGroup>

        <S.FieldGroup>
          <label htmlFor="preco">Preço</label>
          <S.StyledInput id="preco" value={preco} onChange={(e) => setPreco(e.target.value)} />
        </S.FieldGroup>

        <S.FieldGroup>
          <label htmlFor="categoria">Categoria</label>
          <S.StyledDropdown
            id="categoria"
            value={categoria}
            options={categorias?.map((cat) => ({ label: cat.nome, value: cat.id })) || []}
            onChange={(e) => setCategoria(e.value)}
            appendTo="self"
          />
        </S.FieldGroup>

        <S.ButtonsWrapper>
          <S.StyledButton
            label={productToEdit ? 'Salvar alterações' : 'Cadastrar'}
            icon="pi pi-check"
            onClick={handleSubmit}
            loading={createMutation.isPending || updateMutation.isPending}
          />
        </S.ButtonsWrapper>
      </S.FormContainer>
    </S.StyledDialog>
  )
}
