import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
  return(
      <>
          <NavBar/>
          <ItemListContainer 
          saludo="Bienvenido a mi tienda"/>
      </>
  )
}

export default App
