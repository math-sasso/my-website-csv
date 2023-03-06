import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "componentes/Post";
import Rodape from "componentes/Rodape";
import NotFound from "paginas/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

console.log(window.location)


function AppRoutes() {
  return (


    <BrowserRouter>

      <Menu />

      <Routes>
          <Route path="/" element={<PaginaPadrao />} >
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
          
        </Route>
        
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Rodape />
    </BrowserRouter>

  )
}

export default AppRoutes;
