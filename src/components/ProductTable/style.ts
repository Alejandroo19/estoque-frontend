import { Button } from 'primereact/button'
import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc(100vh - 70px);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
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
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  i {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.75rem;
  }
`

export const TableWrapper = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};

  .p-datatable {
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
  .p-datatable-content:hover{
    border: 0;
  }  

  .p-datatable-thead > tr > th {
    background-color: ${({ theme }) => theme.colors.tableHeader};
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    padding: 1rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.border};
    font-size: 0.95rem;
  }

  .p-datatable-tbody > tr > td {
    padding: 1rem;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    border-color: ${({ theme }) => theme.colors.borderLight};
  }

  .p-datatable-tbody > tr:hover {
    background-color: ${({ theme }) => theme.colors.tableHover};
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
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  .p-paginator .p-paginator-first,
  .p-paginator .p-paginator-prev,
  .p-paginator .p-paginator-next,
  .p-paginator .p-paginator-last {
    border-radius: 8px;
  }

  .p-button-rounded.p-button-text {
    font-size: 1.1rem;
    padding: 0.5rem;
  }

  .p-button-info {
    color: ${({ theme }) => theme.colors.info};
  }

  .p-button-danger {
    color: ${({ theme }) => theme.colors.danger};
  }

  .p-button-text:hover {
    background-color: rgba(0,0,0,0.05);
  }
`;

export const StyledButton = styled(Button)`
  background: ${({ theme }) => theme.gradients.primary};
  border: none;
  color: #fff;
  font-weight: 600;
  border-radius: 10px;
  padding: 0.75rem 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadowMd};
  }

  &:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
  }

  .p-button-icon {
    margin-right: 0.5rem;
  }
`
