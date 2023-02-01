import logo from './logo.svg';
import './App.css';
import ListaUsuarios from './ListaUsuario';
import AgregarUsuario from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';

function App() {
  return (
    <div className="App">
       <h1>Crud MERN STACK</h1>
       <ListaUsuarios></ListaUsuarios>
       <AgregarUsuario></AgregarUsuario>
       <EditarUsuario></EditarUsuario>
    </div>
  );
}

export default App;
