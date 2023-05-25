import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import IconoNuevoGasto from "./assets/nuevo-gasto.svg";
import { Task } from "./components/Task";

function App() {
  const [newTarea, setNewTarea] = useState(false);
  const [tareasD, setTareasD] = useState([]);

  const [tareasHechas, setTareasHechas] = useState(0);

  // useEffect(() => {
  //   console.log('Se cambio TareasD', tareasD);
  // }, [tareasD]);

  const eliminarTarea = (taskName) => {
    const textoTarea = taskName;
    const Index = tareasD.findIndex(i => i.nombre === textoTarea) ;
    const tareasActualizadas = [...tareasD];
    tareasActualizadas.splice(Index,1);
    setTareasD([...tareasActualizadas]);
  };

  return (
    <div className="container mx-auto bg-slate-400 mt-10">
      <h2 className="text-white text-3xl text-center font-bold my-2">
        Lista de tareas
      </h2>

      { tareasD.length!==0 && (
        <h3 className="text-white text-2xl text-center font-bold my-2">
          Tareas Completadas {tareasHechas} de {tareasD.length}
        </h3>
      )
      }

      {
        tareasD.length > 0 && (
          tareasD.map((tarea) => {
            return <Task
            key={tarea.nombre + (Math.random()*10000)}
            objeto={tarea}
            posicion={tareasD.indexOf(tarea) + 1}
            tareasHechas={tareasHechas}
            setTareasHechas={setTareasHechas}
            eliminarTarea={eliminarTarea}
            />
          })
        ) 
      }

      <figure className="fixed bottom-5 right-5 rounded-full">
        <img
          className="w-10 hover:cursor-pointer shadow-lg rounded-full"
          src={IconoNuevoGasto}
          alt="icono nuevo gasto"
          onClick={() => {
            setNewTarea(true);
          }}
        />
      </figure>

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
