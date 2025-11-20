import { useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import * as S from './styles'
import { useCategorias, type Categoria } from '../../hooks/useCategorias'
import { useDeleteCategoria } from '../../hooks/useDeleteCategorias'
import { CategoryModal } from '../../components/CategoryModal'
import { TableWrapper } from '../../styles/components/TableStyles'
import { DeleteModal } from '../../components/deleteModal'

export const CategoryPage = () => {
  const { data, isLoading, error } = useCategorias()
  const deleteMutation = useDeleteCategoria()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<Categoria | null>(null)

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number | null>(null);
  const [nameToDelete, setNameToDelete] = useState<string | null>(null);

  const handleDeleteClick = (id: number, nomeProduto: string) => {
    setIdToDelete(id);
    setNameToDelete(nomeProduto);
    setShowDeleteModal(true); 
  };

  const handleConfirmDelete = () => {
    if (idToDelete !== null) {
      deleteMutation.mutate(idToDelete, {
        onSuccess: () => {
          setShowDeleteModal(false);
          setIdToDelete(null);
        },
        onError: () => {
          setShowDeleteModal(false);
        },
      });
    }
  };

  const handleEdit = (categoria: Categoria) => {
    setSelectedCategory(categoria)
    setIsModalVisible(true)
  }

  const handleCreate = () => {
    setSelectedCategory(null)
    setIsModalVisible(true)
  }

  const actionTemplate = (rowData: Categoria) => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Button
        icon="pi pi-pencil"
        className="p-button-rounded p-button-text p-button-info"
        onClick={() => handleEdit(rowData)}
      />
      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-text p-button-danger"
        onClick={() => handleDeleteClick(rowData.id, rowData.nome)}
      />
    </div>
  )

  if (isLoading) return <p>Carregando categorias...</p>
  if (error) return <p>Erro ao carregar categorias</p>

  return (
    <S.Container>
      <S.Header>
        <S.Title>🏷️ Gerenciar Categorias</S.Title>
        <S.StyledButton label="Cadastrar Categoria" icon="pi pi-plus" onClick={handleCreate} />
      </S.Header>

      <TableWrapper>
        <DataTable
          value={data}
          paginator
          rows={5}
          emptyMessage="Nenhuma categoria encontrada."
        >
          <Column field="id" header="ID" style={{ width: '8rem' }} />
          <Column field="nome" header="Nome" />
          <Column header="Ações" body={actionTemplate} style={{ width: '10rem' }} />
        </DataTable>
      </TableWrapper>

      <CategoryModal
        isVisible={isModalVisible}
        onHide={() => setIsModalVisible(false)}
        categoryToEdit={selectedCategory}
      />
      <DeleteModal
        isVisible={showDeleteModal}
        onHide={() => {
          setShowDeleteModal(false); 
          setIdToDelete(null);       
        }}
        onConfirm={handleConfirmDelete}
        itemName={`o produto '${nameToDelete ?? 'selecionado'}'`}
        isDeleting={deleteMutation.isPending}
      />
    </S.Container>
  )
}
