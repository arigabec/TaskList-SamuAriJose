import { formatearCantidad } from "../helpers/numbers";
import Ahorro from "../assets/icono_ahorro.svg";
import Casa from "../assets/icono_casa.svg";
import Comida from "../assets/icono_comida.svg";
import Gasto from "../assets/icono_gastos.svg";
import Ocio from "../assets/icono_ocio.svg";
import Salud from "../assets/icono_salud.svg";
import Suscripciones from "../assets/icono_suscripciones.svg";

const NuevoGasto = ({ gasto }) => {
    return (
        <div className="bg-white shadow-lg rounded-md py-5 w-full lg:w-1/2 mx-auto">
        <h2 className="text-stone-500 text-xl text-center font-bold my-2"> {gasto.nombre} </h2>
        <div className="flex flex-row">
            <div className="basis-1/4 p-5">
                { gasto.categoria === "Comida" && (
                    <img
                        className="basis-1/6 p-5"
                        src={Comida}
                        alt="icono nuevo gasto"
                    />
                )}
                { gasto.categoria === "Ahorro" && (
                    <img
                        className="basis-1/6 p-5"
                        src={Ahorro}
                        alt="icono nuevo gasto"
                    />
                )}
                { gasto.categoria === "Casa" && (
                    <img
                        className="basis-1/6 p-5"
                        src={Casa}
                        alt="icono nuevo gasto"
                    />
                )}
                { gasto.categoria === "Gastos" && (
                    <img
                        className="basis-1/6 p-5"
                        src={Gasto}
                        alt="icono nuevo gasto"
                    />
                )}
                { gasto.categoria === "Ocio" && (
                    <img
                        className="basis-1/6 p-5"
                        src={Ocio}
                        alt="icono nuevo gasto"
                    />
                )}
                { gasto.categoria === "Salud" && (
                    <img
                        className="basis-1/6 p-5"
                        src={Salud}
                        alt="icono nuevo gasto"
                    />
                )}
                { gasto.categoria === "Suscripciones" && (
                    <img
                        className="basis-1/6 p-5"
                        src={Suscripciones}
                        alt="icono nuevo gasto"
                    />
                )}
            </div>
            <div className="basis-1/2 p-5">
            <p className="font-semibold text-gray-500 mt-5">
                <span className="font-bold text-lime-700 text-lg">
                Monto:
                </span>{" "}
                {formatearCantidad(gasto.cantidad)}
            </p>

            <p className="font-semibold text-gray-500">
                <span className="font-bold text-lime-700 text-lg">
                Tipo: {""}
                </span>
                {gasto.categoria} 
            </p>

            <p className="font-semibold text-gray-500">
                <span className="font-bold text-lime-700 text-lg"> Fecha: </span>{" "}
                {gasto.fecha}
            </p>
            </div>
        </div>
        </div>
    );
};

export default NuevoGasto;