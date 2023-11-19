import React from 'react';
import Tarea from './Tarea';

const ListadoTareas = ({ tareas, tareaCompleta, BorrarTarea }) => {
  return (
    <div>
      {tareas.map((tar) => (
        <Tarea
          key={tar.id}
          tar={tar}
          tareaCompleta={tareaCompleta}
          BorrarTarea={BorrarTarea}
        />
      ))}
    </div>
  );
};

export default ListadoTareas;
