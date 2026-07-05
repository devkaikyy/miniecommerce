import {Routes, Route} from 'react-router-dom'
import Cadastro from './pages/Cadastro.jsx'
import Login from './pages/Login.jsx'
import Inicio from './pages/Inicio.jsx'
import Criar from './pages/Criar.jsx'
import Produtos from './pages/Produtos.jsx'


function App(){
  return (
    <>
  
    <Routes>
      <Route path='/' element={<Cadastro/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/inicio' element={<Inicio/>}/>
      <Route path='/criar' element={<Criar/>}/>
      <Route path='/produtos' element={<Produtos/>}/>
    </Routes>
    </>
  )
}

export default App