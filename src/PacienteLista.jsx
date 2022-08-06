
import Paciente from './Paciente'

const PacienteLista = ({pacientes,setPaciente,eliminarpaciente}) => {

    return(
        <div className='mt-10 md:mt-0 md:w-1/2 lg:w-3/5  px-5 '>

            <h1 className='font-bold text-4xl text-center '>{pacientes.length ===0 ? 'No hay pacientes' : 'Listado de Pacientes'}</h1>
            <p className='font-bold text-lg text-center '>Administra tus  <span className='text-indigo-600'>Pacientes y citas</span></p>
            <div className="md:h-screen md:overflow-y-scroll">
                {
                    pacientes.map(paciente=>{
                        return <Paciente
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente ={setPaciente}
                        eliminarpaciente={eliminarpaciente}
                        />
                    })
                }
                
            </div>
            
        </div>
        
    )
}
export default PacienteLista;