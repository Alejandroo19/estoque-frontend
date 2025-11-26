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
    position: relative;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.03) 25%, transparent 50%, rgba(99, 102, 241, 0.03) 75%, transparent 100%),
      linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.04) 30%, transparent 60%, rgba(99, 102, 241, 0.04) 80%, transparent 100%),
      linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.02) 20%, transparent 55%, rgba(99, 102, 241, 0.02) 85%, transparent 100%);
    background-size: 
      100% 400px,
      100% 500px,
      100% 450px;
    background-position: 
      0% 0%,
      0% 200px,
      0% 400px;
    animation: waveMove 25s ease-in-out infinite;
    z-index: -1;
    pointer-events: none;
  }

  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.025) 35%, transparent 65%, rgba(99, 102, 241, 0.025) 90%, transparent 100%),
      linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.035) 25%, transparent 50%, rgba(99, 102, 241, 0.035) 70%, transparent 100%);
    background-size: 
      100% 550px,
      100% 600px;
    background-position: 
      0% 300px,
      0% 600px;
    animation: waveMoveReverse 30s ease-in-out infinite;
    z-index: -1;
    pointer-events: none;
  }

  @keyframes waveMove {
    0%, 100% {
      background-position: 
        0% 0%,
        0% 200px,
        0% 400px;
    }
    50% {
      background-position: 
        0% -50px,
        0% 150px,
        0% 350px;
    }
  }

  @keyframes waveMoveReverse {
    0%, 100% {
      background-position: 
        0% 300px,
        0% 600px;
    }
    50% {
      background-position: 
        0% 350px,
        0% 650px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
  }

  button, a, input, select {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

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

  .p-toast-message-icon {
    margin-right: 0.75rem !important;
  }

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

  .p-button {
    font-weight: 600 !important;
    border-radius: 10px !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }

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
    font-weight: 800 !important;
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

  .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
    background: ${({ theme }) => theme.gradients.primary} !important;
    border-color: transparent !important;
  }
`
