import { Route, Routes } from 'react-router-dom';
import './App.css';
import { FichaProducto } from './components/fichaProducto/fichaProducto';
import { ListadoProductos } from './components/listadoProductos/listadoProductos';


function App() {
  return (
    <>



      {/*
    <FichaProducto identificador="59">
    </FichaProducto>
    */}

      <Routes>
        <Route path="/listadoproductos" element={<ListadoProductos/>}/>
        <Route path="/fichaproducto/:id" element={<FichaProducto/>}/>
      </Routes>

    </>

  );
}

export default App;
