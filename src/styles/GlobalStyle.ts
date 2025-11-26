export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.gradients.subtle || "linear-gradient(180deg, #1a1a2e, #b91c1c)"};
    color: ${({ theme }) => theme.colors.text || "#fce7f3"};
    position: relative;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    background:
      linear-gradient(180deg, transparent 0%, rgba(249, 115, 22, 0.04) 25%, transparent 50%, rgba(239, 68, 68, 0.03) 75%, transparent 100%),
      linear-gradient(180deg, transparent 0%, rgba(249, 115, 22, 0.06) 30%, transparent 60%, rgba(239, 68, 68, 0.05) 80%, transparent 100%),
      linear-gradient(180deg, transparent 0%, rgba(249, 115, 22, 0.03) 20%, transparent 55%, rgba(239, 68, 68, 0.02) 85%, transparent 100%);
    background-size: 100% 400px, 100% 500px, 100% 450px;
    background-position: 0% 0%, 0% 200px, 0% 400px;
    animation: waveMove 25s ease-in-out infinite;
    z-index: -1;
  }

  body::after {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    background:
      linear-gradient(180deg, transparent 0%, rgba(249, 115, 22, 0.06) 35%, transparent 65%, rgba(239, 68, 68, 0.04) 90%, transparent 100%),
      linear-gradient(180deg, transparent 0%, rgba(249, 115, 22, 0.08) 25%, transparent 50%, rgba(239, 68, 68, 0.07) 70%, transparent 100%);
    background-size: 100% 550px, 100% 600px;
    background-position: 0% 300px, 0% 600px;
    animation: waveMoveReverse 30s ease-in-out infinite;
    z-index: -1;
  }
`
