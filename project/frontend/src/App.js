import { Route, Routes } from 'react-router-dom';
import './App.css';
import { VistaListado } from "./vistas/vistaListado/vistaListado.jsx";
import { VistaGrabarProducto } from "./vistas/vistaGrabarProducto/vistaGrabarProducto.jsx";
import { BarraNav } from './components/barranav/barranav';

function App() {
  return (
    <>
      <BarraNav/>
      <Routes>
        <Route path="/listadoproductos" element={<VistaListado />} />
        <Route path="/fichaproducto/" element={<VistaGrabarProducto />}>
          <Route path=":id" element={<VistaGrabarProducto />} />
        </Route>
      </Routes>

    </>

  );
}

export default App;
