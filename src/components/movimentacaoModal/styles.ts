import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { Dropdown } from 'primereact/dropdown'
import { InputNumber } from 'primereact/inputnumber'
import { InputText } from 'primereact/inputtext'
import { Toast } from 'primereact/toast'
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

  input,
  .p-dropdown {
    width: 100%;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`
export const StyledDialog = styled(Dialog)`
  .p-dialog-content {
    padding: 2rem !important;
    border-radius: 0 0 13px 13px;
  }

  .p-dialog-header {
    padding: 1.5rem 2rem;
    border-radius: 13px 13px 0 0;
    background-color: #f9fafc;
    border-bottom: 1px solid #e1e1e2ff;
    font-weight: 600;
    color: #333;
  }

  .p-dialog {
    border-radius: 12px;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
  }
`

export const StyledInput = styled(InputNumber)`
  width: 100%; 
  .p-inputtext {
    width: 100%;
    height: 42px;
    padding: 0.6rem 1rem;
    border: 1px solid #d4dbe5ff;
    border-radius: 8px;
    font-size: 0.95rem;
    color: #333;
    transition: all 0.2s ease;
  }
  
  .p-inputtext:focus {
    outline: none;
    border-color: #007ad9;
    box-shadow: 0 0 0 2px rgba(0, 122, 217, 0.2);
  }

  .p-inputnumber {
    padding: 0;
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
export const StyledToast = styled(Toast)`
  .p-toast {
    top: 80px;
    right: 20px;
    width: auto;
    max-width: 300px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .p-toast-message {
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .p-toast-message-success {
    background-color: #d4edda;
    color: #155724;
  }

  .p-toast-message-error {
    background-color: #f8d7da;
    color: #721c24;
  }

  .p-toast-message-info {
    background-color: #d1ecf1;
    color: #0c5460;
  }

  .p-toast-message-warning {
    background-color: #fff3cd;
    color: #856404;
  }

  .p-toast .p-toast-message .p-toast-message-icon {
    margin: 3rem;
  }
`;

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

export const StyledInpuet = styled(InputText)`
  width: 100%;
  height: 42px;
  padding: 0.6rem 1rem;
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