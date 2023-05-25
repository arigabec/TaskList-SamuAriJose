import {BsCheckLg} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'

export const ButtonTask = ({tipoBoton,accion}) => {
  tipoBoton = tipoBoton.toLowerCase();
  return (
    <button className='bg-transparent hover:bg-slate-300 active:bg-slate-400
    text-lg'
    onClick={accion}
    >
      { tipoBoton==="check" && (
        <BsCheckLg/>
      )}

      { tipoBoton==="delete" && (
        <AiFillDelete/>
      )}
      <BsCheckLg/>
    </button>
  );
};
