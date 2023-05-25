import { ButtonTask } from "./ButtonTask";
import { useState } from 'react';

export const Task = ({ objeto, posicion, tareasHechas,
  setTareasHechas, eliminarTarea }) => {

  // , completado, setCompleteTask,
  // listTaks, setListTaks

  const checkTask = () => {
    // setCompleteTask(!completado);
    if(!objeto.completado){
      objeto.completado = true;
      setTareasHechas(tareasHechas+1);
    }else{
      objeto.completado = false;
      setTareasHechas(tareasHechas-1);
    }
  };

  const deleteTask = () => {
    // const nuevaLita = [...listTaks];
    if(objeto.completado){
      setTareasHechas(tareasHechas-1);
    }
    eliminarTarea(objeto.nombre);
  };

  return (
    <div className="flex flex-row justify-between p-2 m-3 bg-white shadow-lg rounded-md py-5 w-full lg:w-1/2 mx-auto">
      <h2 className={`font-bold text-lg ${objeto.completado && "line-through"}`}> Tarea {posicion} : {objeto.nombre}</h2>
      <div className="flex flex-row">
        <ButtonTask tipoBoton="check" accion={checkTask}/>
        <ButtonTask tipoBoton="delete" accion={deleteTask}/>
      </div>
    </div>
  );
};
