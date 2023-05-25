import { useEffect, useState } from "react";
import Presupuesto from "./components/Presupuesto";
import Modal from "./components/Modal";
import Resumen from "./components/Resumen";
import NuevoGasto from "./components/NuevoGasto";
import IconoNuevoGasto from "./assets/nuevo-gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState("");
  const [gastos, setGastos] = useState(0);
  const [click, setClick] = useState(false);
  const [newGasto, setNewGasto] = useState(false);
  const [gastosD, setGastosD] = useState([]);

  useEffect(() => {
    console.log('Se cambio GastosD', gastosD);
  }, [gastosD]);

  return (
    <div className="container mx-auto bg-slate-400 mt-20">
      {!click ? (
        <Presupuesto
          presupuesto={presupuesto}
          click={click}
          setClick={setClick}
          setPresupuesto={setPresupuesto}
        />
      ) : (
        <>
          <Resumen
            setClick={setClick}
            gastos={gastos}
            setGastos={setGastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            gastosD={gastosD}
            setGastosD={setGastosD}
          />
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
        </>
      )}
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
