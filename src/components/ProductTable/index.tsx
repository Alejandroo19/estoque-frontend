import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useProdutos } from '../../hooks/useProdutos'

export const ProductTable = () => {
  const { data, isLoading, error } = useProdutos()

  if (isLoading) return <p>Carregando produtos...</p>
  if (error) return <p>Erro ao carregar produtos</p>

  return (
    <DataTable value={data} paginator rows={5}>
      <Column field="id" header="ID" />
      <Column field="nome" header="Nome" />
      <Column field="preco" header="Preço" />
      <Column field="categoria" header="Categoria" />
    </DataTable>
  )
}
