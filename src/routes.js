import Rodape from "componentes/Rodape";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

console.log(window.location)


function AppRoutes() {
  return (


    <BrowserRouter>

      <Menu />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Pagina Nao Econtrada</div>} />
      </Routes>
      <Rodape/>
    </BrowserRouter>
    
  )
}

export default AppRoutes;
