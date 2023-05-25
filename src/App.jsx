import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import NuevoGasto from "./components/NuevoGasto";
import IconoNuevoGasto from "./assets/nuevo-gasto.svg";

function App() {
  const [gastos, setGastos] = useState(0);
  const [newGasto, setNewGasto] = useState(false);
  const [gastosD, setGastosD] = useState([]);

  useEffect(() => {
    console.log('Se cambio GastosD', gastosD);
  }, [gastosD]);

  return (
    <div className="container mx-auto bg-slate-400 mt-10">
      <h2 className="text-white-500 text-3xl text-center font-bold my-2"> Lista de tareas </h2>

      {
        gastosD.length > 0 && (
          gastosD.map((gasto) => {
            return <NuevoGasto gasto={gasto}/>
          })
        ) 
      }

      <div className="fixed bottom-5 right-5">
        <img
          className="w-10 hover:cursor-pointer"
          src={IconoNuevoGasto}
          alt="icono nuevo gasto"
          onClick={() => {
            setNewGasto(true);
          }}
        />
      </div>

      {
         newGasto && (
          <Modal
            gastos={gastos}
            setGastos={setGastos}
            gastosD={gastosD}
            setGastosD={setGastosD}
            setNewGasto={setNewGasto}
          />
        )
      }
    </div>
  );
}

export default App;
