import './App.css';
import React, { useState, useEffect } from 'react';
import ListadoTareas from './components/ListadoTareas';
import FormTarea from './components/FormTarea';

const App = () => {
  const [tareas, settareas] = useState([]);
 // Cargar tareas almacenadas en localStorage al iniciar la aplicación
 useEffect(() => {
  const storedTareas = localStorage.getItem('tareas');
  if (storedTareas) {
    settareas(JSON.parse(storedTareas));
  }
}, []);

  const agregartareas = (nomTarea) => {
    const nuevaTarea = {
      id: Math.random().toString(),
      name: nomTarea,
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
      <h1>Listado de Tareas</h1>
      <FormTarea agregartareas={agregartareas} />
      <ListadoTareas
        tareas={tareas}
        tareaCompleta={tareaCompleta}
        BorrarTarea={tareaBorrada}
      /></div>
    </div>
  );
};

export default App;

