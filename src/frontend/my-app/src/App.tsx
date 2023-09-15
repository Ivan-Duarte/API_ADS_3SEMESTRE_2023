import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// layouts e paginas
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import SideBar from './components/SideBar/SideBar'
import { PageModal } from './pages/ModalPage'
import { ModalSolicitaEvidencia } from './components/Modal/BtnPedirEvidencia'
import { ModalUploadEvidence } from './components/UploadEvidence'

// rotas
const router = createBrowserRouter(
  createRoutesFromElements(

    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/modal" element={<PageModal />}></Route>

      <Route path='/login' element={<Login />}></Route>
      <Route path="/modal2" element={<ModalSolicitaEvidencia/>}></Route>
      <Route path="/modal3" element={<ModalUploadEvidence/>}></Route>
      
    </>

  )
)

  function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;