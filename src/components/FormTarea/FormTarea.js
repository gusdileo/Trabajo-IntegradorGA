import React, { useState } from "react";
import "./FormTarea.css";

const FormTarea = ({ agregartareas }) => {
  //useStatate => [variable, editorDeLaVariable] = useState(valor inicial de la variable)
  const [nomTarea, setnomTarea] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");

  const canomTarea = (event) => {
    setnomTarea(event.target.value);
  };

  const camCantidad = (event) => {
    setCantidad(event.target.value);
  };

  const camPrecio = (event) => {
    setPrecio(event.target.value);
  };

  const agregaT = (e) => {
    e.preventDefault();
    if (nomTarea.trim() !== "") {
      agregartareas(nomTarea, cantidad, precio); // Llama a la función para agregar una nueva tarea en el componente principal
      setnomTarea(""); 
      setCantidad("");
      setPrecio("");
    }
  };

  return (
    <form onSubmit={agregaT} className="formTareacontenedor">
      <div className="inputscontenedor">
        <div>
          <label htmlFor="nombreInput">Nombre: </label>
          <input
            type="text"
            value={nomTarea}
            required
            onChange={canomTarea} //e.target.value = lo que se escribe en el input
            placeholder="Agregar tarea..."
          />
        </div>

        <div>
          <label htmlFor="nombreInput"> Cantidad: </label>
          <input
            type="number"
            placeholder="Cantidad"
            required
            value={cantidad}
            onChange={camCantidad}
          />
        </div>

        <div>
          <label htmlFor="nombreInput"> Precio: </label>
          <input
            type="number"
            placeholder="Precio"
            required
            value={precio}
            onChange={camPrecio}
          />
        </div>
      </div>
      <button className="buttonAgregar" type="submit">
        Agregar
      </button>
    </form>
  );
};

export default FormTarea;
