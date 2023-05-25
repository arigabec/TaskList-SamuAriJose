const Descripcion = ({nombre, valor}) => {
    return (
        <p className="font-semibold text-gray-500 mt-5">
            <span className="font-bold text-lime-700 text-lg">
                {nombre} {": "}
            </span>
            {valor}
        </p>
    );
};

export default Descripcion;