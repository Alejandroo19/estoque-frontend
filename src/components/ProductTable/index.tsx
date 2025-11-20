import { useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useProdutos } from '../../hooks/useProdutos'
import { useDeleteProduto } from '../../hooks/useDeleteProduto'
import type { Produto } from '../../hooks/useProdutos'
import { ProductModal } from '../ProductModal'
import * as S from './style'
import { Button } from 'primereact/button'
import { TableWrapper } from '../../styles/components/TableStyles'
import { DeleteModal } from '../deleteModal'

export const ProductTable = () => {
  const { data, isLoading, error } = useProdutos()
  const deleteMutation = useDeleteProduto()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Produto | null>(null)

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number | null>(null);
  const [nameToDelete, setNameToDelete] = useState<string | null>(null);

  const handleDeleteClick = (id: number, nomeProduto: string) => {
    setIdToDelete(id);
    setNameToDelete(nomeProduto);
    setShowDeleteModal(true); // Abre o modal
  };

  const handleConfirmDelete = () => {
    if (idToDelete !== null) {
      deleteMutation.mutate(idToDelete, {
        onSuccess: () => {
          // Limpa os estados e fecha o modal em caso de sucesso
          setShowDeleteModal(false);
          setIdToDelete(null);
          // Aqui você também deve mostrar o Toast de sucesso!
        },
        onError: () => {
          // Trata o erro e fecha o modal
          setShowDeleteModal(false);
          // Aqui você também deve mostrar o Toast de erro!
        },
      });
    }
  };

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
            handleDeleteClick(rowData.id, rowData.nome);
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

      <TableWrapper>
        <DataTable
          value={data}
          paginator
          rows={8}
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
          <Column
            field="quantidadeEstoque"
            header="Estoque"
            body={(rowData: Produto) => rowData.quantidadeEstoque ?? 0}
          />
          <Column header="Ações" body={actionTemplate} style={{ width: '10rem' }} />
        </DataTable>
      </TableWrapper>

      <ProductModal
        isVisible={isModalVisible}
        onHide={() => setIsModalVisible(false)}
        productToEdit={selectedProduct}
      />
      <DeleteModal
        isVisible={showDeleteModal}
        onHide={() => {
          setShowDeleteModal(false); // Fecha o modal ao clicar fora ou em Cancelar
          setIdToDelete(null);       // Limpa o ID selecionado
        }}
        onConfirm={handleConfirmDelete}
        // Monta a string para o modal
        itemName={`o produto '${nameToDelete ?? 'selecionado'}'`}
        isDeleting={deleteMutation.isPending}
      />
    </S.Container>
  )
}
