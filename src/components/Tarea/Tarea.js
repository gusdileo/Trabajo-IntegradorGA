import "./Tarea.css";
import React, { useState } from "react";

const Tarea = ({ tar, tareaCompleta, BorrarTarea }) => {
  const [completed, setCompleted] = useState(false);
  const [editarCantidad, setEditarCantidad] = useState(false); //estado para marcar si se va a editar o no la cantidad
  const [cantidadEditada, setCantidadEditada] = useState(tar.cantidad);

  const compH = () => {
    setCompleted(!completed);
    tareaCompleta(tar.id); // Llama a la función para marcar como completada en el componente principal
  };

  const borrarH = () => {
    BorrarTarea(tar.id); // Llamo a la función para eliminar en el componente principal
  };

  const CantidadCambiar = (event) => {
    setCantidadEditada(event.target.value);
  };

  const CantidadEdit = () => {
    //cambio el estado de editarCantidad para que se habilite el input
    setEditarCantidad(!editarCantidad);
  };

  const CantidadUpdate = () => {
    tar.cantidad = cantidadEditada; //guarda el valor en la tarea
    setEditarCantidad(false);
  };

  const Cancelarupdate = () => {
    setCantidadEditada(tar.cantidad)
    setEditarCantidad(false);
  };

  // Obtener cantidad y precio de la tarea
  const { cantidad, precio } = tar;

  // Calculo el total (cantidad x precio)
  const total = (editarCantidad ? cantidadEditada : cantidad) * precio;

  return (
    <div className="contenedorTarea">
      <div className="contenedorNombre">
        <u>
          <p
            style={{
              color: completed ? "red" : "black",
              textDecoration: completed ? "line-through" : "none",
            }}
            className="nombre"
          >
            {tar.name}
          </p>
        </u>
      </div>
      {editarCantidad === true ? (
        <div>
          <label>Cantidad: </label>
          <input
            className="inputCantidad"
            type="number"
            value={cantidadEditada}
            onChange={CantidadCambiar}
          />

          {editarCantidad && (
            <>
              <button className="boton" onClick={CantidadUpdate}>
                Guardar
              </button>
              <button className="boton" onClick={Cancelarupdate}>
                Cancelar
              </button>
            </>
          )}
        </div>
      ) : (
        <p className="pCantidad" onClick={CantidadEdit}>
          Cantidad: {cantidad}
        </p>
      )}
      <p>Precio: {precio}</p>
      <div className="contenedorBotonesTotal">
        <div className="botones">
          <button className="boton" onClick={compH}>
            {completed ? "Desmarcar" : "Completada"}
          </button>
          <button className="boton" onClick={borrarH}>
            Eliminar
          </button>
        </div>
        <p>Total: ${total}</p>
      </div>
    </div>
  );
};

export default Tarea;
