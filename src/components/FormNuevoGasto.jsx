import { useState } from "react";
const FormNuevoGasto = ({ listTaks, setListTaks, gastosD, setGastosD, setNewGasto }) => {
  const current = new Date();
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const tarea = [
      {
        nombre,
        fecha: `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`,
      },
    ];
    setGastosD([...gastosD, ...gasto]);
    setGastos(gastos + cantidad);
    setNewGasto(false);
  };
  return (
    <div className="bg-white shadow-lg rounded-md py-5 w-1/2 md:w-1/3 mx-auto mt-20">
      <h2 className="text-stone-500 text-3xl text-center font-bold my-5">
        Add Task
      </h2>
      <form onSubmit={handleSubmit} className="px-5">
        <div className="campo">
          <label className="label-form" htmlFor="nombre">
            Nombre Gasto
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="añade el Nombre de la tarea"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          type="submit"
          value={"Añadir Gasto"}
        />
      </form>
    </div>
  );
};

export default FormNuevoGasto;
