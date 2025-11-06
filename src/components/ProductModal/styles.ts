import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
`

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  label {
    font-weight: 500;
    color: #333;
  }

  input {
    width: 100%;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
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

export const StyledInput = styled(InputText)`
  width: 100%;
  height: 42px;
  padding: 0.6rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #333;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #007ad9;
    box-shadow: 0 0 0 2px rgba(0, 122, 217, 0.2);
  }

  &::placeholder {
    color: #999;
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #777;
    cursor: not-allowed;
  }
`

export const StyledDialog = styled(Dialog)`
  .p-dialog-content {
    padding: 2rem !important;
    border-radius: 0 0 12px 12px;
  }

  .p-dialog-header {
    padding: 1.5rem 2rem;
    border-radius: 12px 12px 0 0;
    background-color: #f9fafb;
    border-bottom: 1px solid #e5e7eb;
    font-weight: 600;
    color: #333;
  }

  .p-dialog {
    border-radius: 12px;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
  }
`

export const StyledDropdown = styled(Dropdown)`
  width: 100%;
  height: 42px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #333;
  padding: 0.3rem 0.8rem;
  background-color: #fff;
  transition: all 0.2s ease;

  .p-dropdown-label { display: flex; align-items: center; padding: 0.3rem 0.8rem; }
  .p-dropdown-trigger { border-left: 1px solid #d1d5db; color: #666; }

  &:hover { border-color: #b0b0b0; }
  &:focus-within { border-color: #007ad9; box-shadow: 0 0 0 2px rgba(0,122,217,.2); }

  /* Agora estes pegam porque o painel está “dentro” */
  .p-dropdown-panel {
    border: 1px solid #d1d5db;
    border-radius: 10px;
    box-shadow: 0 4px 16px rgba(0,0,0,.08);
    background-color: #fff;
    margin-top: .2rem;
    overflow: hidden;
    min-width: 100%;
  }

  .p-dropdown-items-wrapper { max-height: 200px; overflow-y: auto; }
  .p-dropdown-item { padding: .6rem 1rem; transition: background-color .15s ease; }
  .p-dropdown-item:hover { background-color: #f0f4f8; }
  .p-highlight { background-color: #007ad9 !important; color: #fff !important; }
`

