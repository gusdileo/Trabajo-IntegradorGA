import './App.css';
import React, { useState } from 'react';
import ListadoTareas from './components/ListadoTareas';
import FormTarea from './components/FormTarea';

const App = () => {
  const [tareas, settareas] = useState([]);

  const agregartareas = (nomTarea) => {
    const nuevaTarea = {
      id: Math.random().toString(),
      name: nomTarea,
    };
    settareas([...tareas, nuevaTarea]);
  };

  const tareaCompleta = (tareaId) => {
    const nuevastareas = tareas.map((tarea) =>
      tarea.id === tareaId ? { ...tarea, completed: !tarea.completed } : tarea
    );
    settareas(nuevastareas);
  };

  const tareaBorrada = (tareaId) => {
    const filteredtareas = tareas.filter((tarea) => tarea.id !== tareaId);
    settareas(filteredtareas);
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

