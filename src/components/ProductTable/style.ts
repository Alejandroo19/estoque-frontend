import { Button } from 'primereact/button'
import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc(100vh - 70px); /* 100vh menos o menu/header, ajuste se precisar */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;

  /* conteúdo visual da "caixa" branca */
  background-color: #ada8a8ff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  /* evita overflow lateral */
  overflow-x: hidden;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
`

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 25px;

  .p-datatable {
    width: 100%;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
  }

  .p-datatable-thead > tr > th {
    background-color: #f9fafb;
    color: #374151;
    font-weight: 600;
    padding: 1rem;
    border-bottom: 1px solid #e5e7eb;
    font-size: 0.95rem;
  }

  /* Linhas do corpo */
  .p-datatable-tbody > tr > td {
    padding: 0;
    font-size: 0.95rem;
    color: #4b5563;
    border-color: #f1f5f9;
  }

  /* Hover na linha */
  .p-datatable-tbody > tr:hover {
    background-color: #f3f4f6;
    transition: 0.2s ease;
    cursor: pointer;
  }

  .p-paginator {
    border: none;
    padding: 1rem 0;
  }

  .p-paginator .p-paginator-pages .p-paginator-page {
    border-radius: 8px;
    margin: 0 4px;
  }

  .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
    background-color: #007ad9;
    color: white;
  }

  .p-paginator .p-paginator-first,
  .p-paginator .p-paginator-prev,
  .p-paginator .p-paginator-next,
  .p-paginator .p-paginator-last {
    border-radius: 8px;
  }

  /* Botões de ação */
  .p-button-rounded.p-button-text {
    font-size: 1.1rem;
    padding: 0.5rem;
  }

  .p-button-info {
    color: #0284c7;
  }

  .p-button-danger {
    color: #dc2626;
  }

  .p-button-text:hover {
    background-color: rgba(0,0,0,0.05);
  }
`;

export const StyledButton = styled(Button)`
    background-color: #007ad9;
  border: none;
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #005fa3;
    transform: translateY(-1px);
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 122, 217, 0.3);
  }

  .p-button-icon {
    margin-right: 0.5rem;
  }
`
