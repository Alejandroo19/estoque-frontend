import { useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useProdutos } from '../../hooks/useProdutos'
import { useDeleteProduto } from '../../hooks/useDeleteProduto'
import type { Produto } from '../../hooks/useProdutos'
import { ProductModal } from '../ProductModal'
import * as S from './style'
import { Button } from 'primereact/button'

export const ProductTable = () => {
  const { data, isLoading, error } = useProdutos()
  console.log('📦 Dados vindos da API:', data)
  const deleteMutation = useDeleteProduto()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Produto | null>(null)

  const handleDelete = (id: number) => {
    if (confirm('Deseja realmente excluir este produto?')) {
      deleteMutation.mutate(id)
    }
  }

  const handleEdit = (produto: Produto) => {
    setSelectedProduct(produto)
    setIsModalVisible(true)
  }

  const handleCreate = () => {
    setSelectedProduct(null)
    setIsModalVisible(true)
  }

  const actionTemplate = (rowData: Produto) => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Button
        icon="pi pi-pencil"
        type='button'
        className="p-button-rounded p-button-text p-button-info"
        onClick={() => handleEdit(rowData)}
      />
      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-text p-button-danger"
        onClick={() => {
          if (rowData.id !== null && rowData.id !== undefined) {
            handleDelete(rowData.id);
          }
        }}
      />
    </div>
  );

  if (isLoading) return <p>Carregando produtos...</p>
  if (error) return <p>Erro ao carregar produtos</p>

  return (
    <S.Container>
      <S.Header>
        <S.Title>📦 Gerenciar Produtos</S.Title>
        <S.StyledButton
          label="Cadastrar Produto"
          icon="pi pi-plus"
          onClick={handleCreate}
        />
      </S.Header>

      <S.TableWrapper>
       <DataTable
          value={data}
          paginator
          rows={5}
          emptyMessage="Nenhum produto encontrado."
        >
          <Column field="id" header="ID" style={{ width: '8rem' }} />
          <Column field="nome" header="Nome" />
          <Column
            header="Preço"
            body={(rowData: Produto) => `R$ ${rowData.precoUnitario.toFixed(2)}`}
          />
          <Column
            header="Categoria"
            body={(rowData: Produto) => rowData.categoria?.nome || 'Sem categoria'}
          />
          <Column header="Ações" body={actionTemplate} style={{ width: '10rem' }} />
        </DataTable>
      </S.TableWrapper>

      <ProductModal
        isVisible={isModalVisible}
        onHide={() => setIsModalVisible(false)}
        productToEdit={selectedProduct}
      />
    </S.Container>
  )
}
