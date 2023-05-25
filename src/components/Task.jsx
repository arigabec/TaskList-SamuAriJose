import { ButtonTask } from "./ButtonTask";
import { useState } from 'react';

export const Task = ({nombreTarea}) => {

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
        <div className="flex flex-row justify-between p-2 m-3">
          <h2 className={`font-bold text-lg ${completado && "line-through"}`}>{nombreTarea}</h2>
          <ButtonTask tipoBoton="check" accion={checkTask}/>
          <ButtonTask tipoBoton="delete" accion={deleteTask}/>
        </div>
      )}
    </>
  );
};
