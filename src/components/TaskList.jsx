import { useState } from "react";
import { Task } from "./Task";

export const TaskList = () => {

  const [listTaks, setListTaks] = useState([]);

  // class TaskClass{
  //   constructor(nombre,completado){

  //   }
  // }

  const TaskObject = {
    nombre:'',
    fecha:'',
    completado:false
  };

  return (
    <section className="flex flex-col p-3 m-3 justify-center items-center">
      <h2 className="">
        Tareas por hacer: {listTaks.length!==0 ? listTaks.length : 0}
      </h2>
      {listTaks.length!==0 && (
        <>
        {listTaks.map(tarea => (
          <Task
          
          />
        ))}
        </>
      )}
    </section>
  );
};
