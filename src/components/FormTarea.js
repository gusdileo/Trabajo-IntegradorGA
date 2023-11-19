import React, { useState } from 'react';

const FormTarea = ({ agregartareas }) => {
  //useStatate => [variable, editorDeLaVariable] = useState(valor inicial de la variable)
  const [nomTarea, setnomTarea] = useState('');

  const agregaT = (e) => {
    e.preventDefault();
    if (nomTarea.trim() !== '') {
      agregartareas(nomTarea); // Llama a la función para agregar una nueva tarea en el componente principal
      setnomTarea(''); // Limpia el campo después de agregar la tarea
    }
  };

  return (
    <form onSubmit={agregaT}>
      <input
        type="text"
        value={nomTarea}
        onChange={(e) => setnomTarea(e.target.value)}//e.target.value = lo que se escribe en el input
        placeholder="Agregar tarea..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default FormTarea;
