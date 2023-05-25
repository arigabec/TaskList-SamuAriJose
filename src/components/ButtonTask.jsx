import {BsCheckLg} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'

export const ButtonTask = ({tipoBoton,accion}) => {
  tipoBoton = tipoBoton.toLowerCase();
  return (
    <button className='bg-transparent hover:bg-slate-300 active:bg-sky-400
    active:text-slate-50 text-lg rounded-full ml-5 p-1'
    onClick={accion}
    >
      { tipoBoton==="check" && (
        <BsCheckLg/>
      )}
      { tipoBoton==="delete" && (
        <AiFillDelete/>
      )}
    </button>
  );
};
