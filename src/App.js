import './App.css';
import React, { useState, useEffect } from 'react';
import ListadoTareas from './components/ListadoTareas/ListadoTareas';
import FormTarea from './components/FormTarea/FormTarea';
import logo from 'c:/react/proyectos/app-ti/src/RdMoto.png';
const App = () => {
  const [tareas, settareas] = useState([]);
 // Cargar tareas almacenadas en localStorage al iniciar la aplicación
 useEffect(() => {
  const storedTareas = localStorage.getItem('tareas');
  if (storedTareas) {
    settareas(JSON.parse(storedTareas));
  }
}, []);

  const agregartareas = (nomTarea, cantidad, precio) => {
    const nuevaTarea = {
      id: Math.random().toString(),
      name: nomTarea,
      cantidad: cantidad,
      precio: precio,
      completed: false, // Asumiendo que inicialmente una tarea no está completada
    };
    const nuevasTareas = [...tareas, nuevaTarea];
    settareas(nuevasTareas);
    localStorage.setItem('tareas', JSON.stringify(nuevasTareas)); // Guardar en localStorage
     
  };

  const tareaCompleta = (tareaId) => {
    const nuevastareas = tareas.map((tarea) =>
      tarea.id === tareaId ? { ...tarea, completed: !tarea.completed } : tarea
    );
    settareas(nuevastareas);
    localStorage.setItem('tareas', JSON.stringify(nuevastareas)); // Guardar en localStorage
  };

  const tareaBorrada = (tareaId) => {
    const tareasFiltradas = tareas.filter((tarea) => tarea.id !== tareaId);
    settareas(tareasFiltradas);
    localStorage.setItem('tareas', JSON.stringify(tareasFiltradas)); // Guardar en localStorage
  };

  return (
    <div className='App'>
     <div className='contenedorPrincipal'>

     <img src={logo}className='ImagenLogo' alt="Logo de laempresa " />

      <u><h1>Listado de Tareas Taller</h1></u>
      <FormTarea agregartareas={agregartareas} />
      <ListadoTareas
        tareas={tareas}
        tareaCompleta={tareaCompleta}
        BorrarTarea={tareaBorrada}
      /></div>

      <div className='footer'>
        <p>Grupo A - TP Integrador - Argentina Programa 4.0</p>
      </div>
    </div>
  );
};

export default App;

