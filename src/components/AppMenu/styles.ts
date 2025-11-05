import styled from 'styled-components'

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;

  .p-menubar {
    border: none;
    border-radius: 0;
    background: transparent;
    padding: 0.8rem 2rem;
  }

  .p-menuitem-link {
    border-radius: 6px;
    padding: 0.6rem 1rem;
    transition: all 0.3s ease;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  .p-menuitem-text {
    font-weight: 500;
    color: #333;
  }

  .p-menuitem-icon {
    margin-right: 0.5rem;
    color: #444;
  }

  .p-menubar-root-list {
    gap: 0.5rem;
    display: flex;
    align-items: center;
  }

  /* Remove excesso de padding lateral */
  .p-menubar-end {
    margin-left: auto;
  }
`
