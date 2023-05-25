const NuevaTarea = ({ tarea, posicion }) => {
    return (
        <div className="bg-white shadow-lg rounded-md py-5 w-full lg:w-1/2 mx-auto m-3">
            <h2 className="text-stone-500 text-xl text-center font-bold my-2"> Tarea {posicion} : {tarea.nombre} </h2>
        </div>
    );
};

export default NuevaTarea;