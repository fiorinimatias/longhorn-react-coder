import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { CartContextProvider } from './context/CartContext'
import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <ChakraProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/categorias/:categoryId' element={<ItemListContainer />} />
              <Route path='/producto/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  )
}

export default App