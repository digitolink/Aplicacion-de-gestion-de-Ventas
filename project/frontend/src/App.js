import { Route, Routes } from 'react-router-dom';
import './App.css';
import { VistaListado } from "./vistas/vistaListado/vistaListado.jsx";
import { VistaGrabarProducto } from "./vistas/vistaGrabarProducto/vistaGrabarProducto.jsx";
import { BarraNav } from './components/barranav/barranav';
import { VistaConsultas } from './vistas/vistaConsultas/vistaConsultas';
import { VistaBorrarProducto } from './vistas/vistaBorrarProducto/vistaBorrarProducto';
import { SignUp } from './vistas/signup/signup';

function App() {
  return (
    <>
      <BarraNav/>
      <div className='wrapper'>
        <Routes>
          <Route path="/listadoproductos/" element={<VistaListado />} />
          <Route path="/fichaproducto/" element={<VistaGrabarProducto />}>
            <Route path=":id" element={<VistaGrabarProducto />} />
          </Route>
          <Route path="/busquedaproducto/" element={<VistaConsultas />}/>
          <Route path="/" element={<VistaConsultas />}/>
          <Route path="/bajaproducto/" element={<VistaBorrarProducto />}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>

      <footer>
        <br></br>
        <br></br>

        <a href='https://aplicacion-de-gestion-de-ventas-production.up.railway.app/'>VentasApp en Internet</a>
        
        <br></br>
        <br></br>
      </footer>

    </>

  );
}

export default App;
