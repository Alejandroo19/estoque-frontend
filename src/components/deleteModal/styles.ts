
import styled from 'styled-components';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';


export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  gap: 10px; /* Adicionado gap para espaçamento entre botões */
`;

export const StyledDialog = styled(Dialog)`
  .p-dialog-content {
    padding: 2rem;
    padding-top: 0;
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

  /* Estilo específico para o footer do DeleteModal, se necessário */
  .p-dialog-footer {
    padding: 1rem 2rem;
    border-top: 1px solid #e5e7eb;
  }
`;

export const StyledButton = styled(Button)`
  background-color: ${props => (props.severity === 'danger' ? '#c0392b' : '#007ad9')};
  border: none;
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  transition: all 0.2s ease;
  gap: 5px;

  &:hover {
    background-color: ${props => (props.severity === 'danger' ? '#a53125' : '#005fa3')};
    transform: translateY(-1px);
  }
  
  /* Garante que o botão de texto (Cancelar) tenha o estilo correto */
  &.p-button-text {
      background-color: transparent !important;
      color: #6c757d !important;
      border: none;
      box-shadow: none;
  }
`;

export const DeleteMessageContainer = styled.div`
  /* Estiliza o conteúdo da mensagem do modal */
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0; /* Padding interno */
  
  font-size: 1.05rem;
  color: #333;
  
  p {
    margin: 0;
  }
  
  /* Estilo para a linha de alerta de irreversibilidade */
  .warning-text {
    font-weight: 600;
    color: #cc0000;
    margin-top: 10px;
  }
`;