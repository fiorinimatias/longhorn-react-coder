import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<ItemListContainer title='Tienda'/>}/>
            <Route path='/categorias/:categoryId' element={<ItemListContainer title='Tienda' />}/>
            <Route path='/producto/:productId' element={<ItemDetailContainer />}/>
            <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App