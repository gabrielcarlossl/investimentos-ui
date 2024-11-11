// Pages
import Main from '../pages/Main'
import NotFound from '../pages/NotFound'
import FormSuccess from '../pages/FormSuccess'
import JoinUs from '../pages/JoinUs'

// Template Layout
import AppBarMenu from '../components/AppBar'
import Footer from '../components/Footer'

// Utils
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Root = () => {
  return (
    <BrowserRouter>
    <AppBarMenu />
     <Routes>
       <Route path='/' element={<Main/>} />
       <Route path='/formulario' element={<JoinUs />} />
       <Route path='/success' element={<FormSuccess />} />
       <Route path='*' element={<NotFound />} />
     </Routes>
     <Footer />
   </BrowserRouter>
  )
}

export default Root
