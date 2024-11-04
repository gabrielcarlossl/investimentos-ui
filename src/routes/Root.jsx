import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppBarMenu from '../components/AppBar';
import Main from '../pages/Main';
import Footer from '../components/Footer';
import Formulario from '../pages/Form'
import NotFound from '../pages/NotFound'
import FormSuccess from '../pages/FormSuccess';

const Root = () => {
  return (
    <BrowserRouter>
    <AppBarMenu />
     <Routes>
       <Route path='/' element={<Main/>} />
       <Route path='/formulario' element={<Formulario />} />
       <Route path='/success' element={<FormSuccess />} />
       <Route path='*' element={<NotFound />} />
     </Routes>
     <Footer />
   </BrowserRouter>
  )
}

export default Root
