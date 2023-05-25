import { useState } from "react";
const FormNuevoGasto = ({ gastos, setGastos, gastosD, setGastosD, setNewGasto }) => {
  const current = new Date();
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const gasto = [
      {
        nombre,
      },
    ];
    setGastosD([...gastosD, ...gasto]);
    setGastos(gastos + cantidad);
    setNewGasto(false);
    console.log(nombre);
  };
  return (
    <div className="bg-white shadow-lg rounded-md py-5 w-1/2 md:w-1/3 mx-auto mt-20">
      <h2 className="text-stone-500 text-3xl text-center font-bold my-5">
        Agregar tarea
      </h2>
      <form onSubmit={handleSubmit} className="px-5">
        <div className="campo">
          <label className="label-form" htmlFor="nombre">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el nombre de la tarea"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label className="label-form" htmlFor="fecha">
            Fecha
          </label>

          <input
            id="cantidad"
            type="date"
            placeholder="Añade la fecha de la tarea"
            value={fecha}
          />
        </div>

        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          type="submit"
          value={"Añadir Tarea"}
        />
      </form>
    </div>
  );
};

export default FormNuevoGasto;
