import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppMenu } from './components/AppMenu'
import { GlobalStyle } from './styles/GlobalStyle'
import { Home } from './pages/home'
import { ProductTable } from './components/ProductTable'
import { CategoryPage } from './pages/CategoryPage'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<ProductTable />} />
        <Route path="/categorias" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}
