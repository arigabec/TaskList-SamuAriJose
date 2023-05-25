import { ButtonTask } from "./ButtonTask";

export const Task = ({nombreTarea}) => {

  const checkTask = () => {

  };

  const deleteTask = () => {

  };

  return (
    <div className="flex flex-row justify-between p-2 m-3">
      <h2 className="font-bold text-lg">{nombreTarea}</h2>
      <ButtonTask tipoBoton="check" accion={checkTask}/>
      <ButtonTask tipoBoton="delete" accion={deleteTask}/>
    </div>
  );
};
