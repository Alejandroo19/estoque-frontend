import { Button } from 'primereact/button'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`

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
  .p-datatable {
    border-radius: 10px;
    overflow: hidden;
  }

  .p-datatable-header {
    background-color: #f8f9fa;
    font-weight: 600;
  }
`

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
