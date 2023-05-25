import CerrarBtn from "../assets/cerrar.svg";
import FormNuevaTarea from "./FormNuevaTarea";

const Modal = ({tareasD, setTareasD, setNewTarea}) => {
  const ocultarModal = () => {
    console.log("ocultar modal");
    setNewTarea(false);
  };
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-custom-black">
      <div className="absolute right-3 top-3 w-5 h-5 cursor-pointer">
        <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>
      <FormNuevaTarea tareasD={tareasD} setTareasD={setTareasD} setNewTarea={setNewTarea}/>
    </div>
  );
};

export default Modal;
