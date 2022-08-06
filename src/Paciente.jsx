
const paciente = ({setPaciente,paciente,eliminarpaciente}) => {
    const {nombre,propietario,email,date,sintomas} = paciente;

    const handleeliminarpaciente = () =>{
            const respuesta =confirm("¿Seguro de eliminar este paciente de la lista?");

            if(respuesta){
                    eliminarpaciente(paciente.id)
            }
    }
return (
    <div className='rounded-md drop-shadow-lg py-5 my-8 px-5 bg-white mb-2'>
    <p className="font-bold uppercase mb-2">
            Mascota:{" "}
            <span className="font-normal normal-case">{nombre}</span>
    </p>
    <p className="font-bold uppercase mb-2">
            Propietario:{" "}
            <span className="font-normal normal-case">{propietario}</span>
    </p> 
    <p className="font-bold uppercase mb-2">
            Email:{" "}
            <span className="font-normal normal-case">{email}</span>
    </p> 
    <p className="font-bold uppercase mb-2">
            Fecha de Alta:{" "}
            <span className="font-normal normal-case">{date}</span>
    </p> 
    <p className="font-bold uppercase">
            Síntomas:{" "}
            <span className="font-normal normal-case">{sintomas}</span>
    </p>
    <div className="mt-5">
            <button className=" p-3 text-white font-bold bg-green-400 hover:bg-green-500 rounded-lg mr-7"
            onClick={()=>setPaciente(paciente)}
            >Editar</button>
            <button className=" p-3 text-white font-bold bg-red-400 hover:bg-red-500 rounded-lg"
            onClick={handleeliminarpaciente}
            >Eliminar</button>
            
    </div>             

</div>
)
}

export default paciente