import React from "react";
import Tarea from "../Tarea/Tarea";
import "./ListadoTareas.css";

const ListadoTareas = ({ tareas, tareaCompleta, BorrarTarea }) => {
  return (
    <div className="contenedorListado">
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
