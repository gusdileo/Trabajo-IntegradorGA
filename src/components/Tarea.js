import './Tarea.css'
import React, { useState } from 'react';

const Tarea = ({ tar, tareaCompleta, BorrarTarea }) => {
  const [completed, setCompleted] = useState(false);

  const compH = () => {
    setCompleted(!completed);
    tareaCompleta(tar.id); // Llama a la función para marcar como completada en el componente principal
  };

  const borrarH = () => {
    BorrarTarea(tar.id); // Llamo a la función para eliminar en el componente principal
  };

  return (
    <div className='contenedorTarea'>
      <p style={{ color: completed ? 'red' : 'black', textDecoration: completed ? 'line-through' : 'none' }}>{tar.name}</p>
      <button onClick={compH}>
        {completed ? 'Desmarcar' : 'Completada'}
      </button>
      <button onClick={borrarH}>Eliminar</button>
    </div>
  );
};

export default Tarea;
