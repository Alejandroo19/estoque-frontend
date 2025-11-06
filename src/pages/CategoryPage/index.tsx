import { useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import * as S from './styles'
import { useCategorias, type Categoria } from '../../hooks/useCategorias'
import { useDeleteCategoria } from '../../hooks/useDeleteCategorias'
import { CategoryModal } from '../../components/CategoryModal'

export const CategoryPage = () => {
  const { data, isLoading, error } = useCategorias()
  const deleteMutation = useDeleteCategoria()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<Categoria | null>(null)

  const handleDelete = (id: number) => {
    if (confirm('Deseja realmente excluir esta categoria?')) {
      deleteMutation.mutate(id)
    }
  }

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
        onClick={() => handleDelete(rowData.id)}
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

      <S.TableWrapper>
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
      </S.TableWrapper>

      <CategoryModal
        isVisible={isModalVisible}
        onHide={() => setIsModalVisible(false)}
        categoryToEdit={selectedCategory}
      />
    </S.Container>
  )
}
