import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.gradients.subtle};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
  }

  /* Smooth transitions */
  button, a, input, select {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* MENU OVERRIDE - Remove white background from ALL states */
  .p-menuitem-content,
  .p-menuitem-link {
    background: transparent !important;
    background-color: transparent !important;
  }

  .p-menuitem-content:hover {
    background: rgba(255, 255, 255, 0.1) !important;
    background-color: rgba(255, 255, 255, 0.1) !important;
  }

  .p-menuitem-content:focus,
  .p-menuitem-content:focus-visible,
  .p-menuitem-content.p-focus,
  .p-menuitem.p-focus .p-menuitem-content {
    background: rgba(255, 255, 255, 0.1) !important;
    background-color: rgba(255, 255, 255, 0.1) !important;
    outline: none !important;
    box-shadow: none !important;
  }

  /* Custom scrollbar with neutral theme */

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(100, 100, 100, 0.5);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(100, 100, 100, 0.7);
  }

  /* Toast styling */
  .p-toast-message-icon {
    margin-right: 0.75rem !important;
  }

  /* DataTable improvements with purple theme */
  .p-datatable {
    border-radius: ${({ theme }) => theme.borderRadius} !important;
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.shadow} !important;
  }

  .p-datatable-thead > tr > th {
    background: ${({ theme }) => theme.gradients.subtle} !important;
    color: ${({ theme }) => theme.colors.text} !important;
    font-weight: 700 !important;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary} !important;
    text-align: center !important;
    vertical-align: middle !important;
  }

  .p-datatable-tbody > tr > td {
    text-align: center !important;
    vertical-align: middle !important;
  }

  .p-datatable-tbody td > div,
  .p-datatable-tbody td .p-cell {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
  }

  .p-datatable-tbody > tr:hover {
    background-color: ${({ theme }) => theme.colors.tableHover} !important;
    transform: scale(1.001);
    outline: none !important;
    box-shadow: none !important;
  }

  /* Remove ALL purple focus outlines from table rows and cells */
  .p-datatable-tbody > tr:focus,
  .p-datatable-tbody > tr:focus-visible,
  .p-datatable-tbody > tr:focus-within,
  .p-datatable-tbody > tr:hover {
    outline: none !important;
    box-shadow: none !important;
  }

  .p-datatable-tbody > tr > td:focus,
  .p-datatable-tbody > tr > td:focus-visible,
  .p-datatable-tbody > tr > td:focus-within,
  .p-datatable-tbody > tr > td:hover {
    outline: none !important;
    box-shadow: none !important;
  }

  /* Remove focus from selectable rows */
  .p-selectable-row:focus,
  .p-selectable-row:focus-visible,
  .p-selectable-row:hover {
    outline: none !important;
    box-shadow: none !important;
  }

  /* Remove focus from any datatable element */
  .p-datatable *:focus,
  .p-datatable *:focus-visible,
  .p-datatable *:hover {
    outline: none !important;
    box-shadow: none !important;
  }

  /* Button improvements with purple theme */
  .p-button {
    font-weight: 600 !important;
    border-radius: 10px !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }

  .p-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadowMd} !important;
  }

  .p-button:active:not(:disabled) {
    transform: translateY(0);
  }

  /* Dialog improvements */
  .p-dialog {
    border-radius: 16px !important;
    box-shadow: ${({ theme }) => theme.shadowLg} !important;
    overflow: hidden;
  }

  .p-dialog-header {
    background: ${({ theme }) => theme.gradients.primary} !important;
    color: white !important;
    border-bottom: none !important;
    padding: 1.5rem 2rem !important;
  }

  .p-dialog-title {
    color: white !important;
    font-weight: 700 !important;
  }

  .p-dialog-header-icon {
    color: white !important;
  }

  .p-dialog-header-icon:hover {
    background: rgba(255, 255, 255, 0.2) !important;
  }

  .p-dialog-content {
    padding: 2rem !important;
  }

  /* Paginator with purple theme */
  .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
    background: ${({ theme }) => theme.gradients.primary} !important;
    border-color: transparent !important;
  }
`
