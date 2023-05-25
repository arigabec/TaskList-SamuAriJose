import { ButtonTask } from "./ButtonTask";
import { useState } from 'react';

export const Task = ({ nombreTarea, posicion }) => {

  // , completado, setCompleteTask,
  // listTaks, setListTaks

  const [completado, setCompletado] = useState(false);
  const [visible, setVisible] = useState(true);

  const checkTask = () => {
    // setCompleteTask(!completado);
    setCompletado(!completado);
  };

  const deleteTask = () => {
    // const nuevaLita = [...listTaks];
    setVisible(!visible);
  };

  return (
    <>
      {visible && (
        <div className="flex flex-row justify-between p-2 m-3 bg-white shadow-lg rounded-md py-5 w-full lg:w-1/2 mx-auto">
          <h2 className={`font-bold text-lg ${completado && "line-through"}`}> Tarea {posicion} : {nombreTarea.nombre}</h2>
          <div className="flex flex-row">
            <ButtonTask tipoBoton="check" accion={checkTask}/>
            <ButtonTask tipoBoton="delete" accion={deleteTask}/>
          </div>
        </div>
      )}
    </>
  );
};
