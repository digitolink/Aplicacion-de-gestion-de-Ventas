import { Route, Routes } from 'react-router-dom';
import './App.css';
import { BarraNav } from './components/barranav/barranav';
import { FichaProducto } from './components/fichaProducto/fichaProducto';
import { ListadoProductos } from './components/listadoProductos/listadoProductos';


function App() {
  return (
    <>

    <BarraNav/>  

      {/*
    <FichaProducto identificador="59">
    </FichaProducto>
    */}

      <Routes>
        <Route path="/listadoproductos" element={<ListadoProductos/>}/>
        <Route path="/fichaproducto/" element={<FichaProducto/>}>
          <Route path=":id" element={<FichaProducto/>}/>
        </Route>
      </Routes>

    </>

  );
}

export default App;
