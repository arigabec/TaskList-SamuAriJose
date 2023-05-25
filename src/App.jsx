import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import IconoNuevoGasto from "./assets/nuevo-gasto.svg";
import { Task } from "./components/Task";

function App() {
  const [newTarea, setNewTarea] = useState(false);
  const [tareasD, setTareasD] = useState([]);

  useEffect(() => {
    console.log('Se cambio TareasD', tareasD);
  }, [tareasD]);

  return (
    <div className="container mx-auto bg-slate-400 mt-10">
      <h2 className="text-white-500 text-3xl text-center font-bold my-2"> Lista de tareas </h2>

      {
        tareasD.length > 0 && (
          tareasD.map((tarea) => {
            return <Task nombreTarea={tarea} posicion={tareasD.indexOf(tarea) + 1}/>
          })
        ) 
      }

      <div className="fixed bottom-5 right-5">
        <img
          className="w-10 hover:cursor-pointer"
          src={IconoNuevoGasto}
          alt="icono nuevo gasto"
          onClick={() => {
            setNewTarea(true);
          }}
        />
      </div>

      {
         newTarea && (
          <Modal
            tareasD={tareasD}
            setTareasD={setTareasD}
            setNewTarea={setNewTarea}
          />
        )
      }
    </div>
  );
}

export default App;
