import { useState,useEffect } from 'react'
import Error from './Error';

const formulario = ({setPacientes,pacientes,paciente,setPaciente}) => {
  const [nombre,setNombre] = useState("");
  const [propietario,setPropietario] = useState("");
  const [email,setEmail] = useState("");
  const [date,setDate] = useState("");
  const [sintomas,setSintomas] = useState("");
  const [error,setError] = useState(false);
      useEffect(()=>{
          if (Object.keys(paciente).length >0) {
                setNombre(paciente.nombre);
                setPropietario(paciente.propietario);
                setEmail(paciente.email);
                setDate(paciente.date);
                setSintomas(paciente.sintomas);
          }
      },[paciente]);

  const generarID =() =>{
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha
  }

  const handleSubmit =(e) =>{
    e.preventDefault();
    //Validación de formulario
    if ([nombre,propietario,email,date,sintomas].includes('')) {
      setError(true);
      setTimeout(() => {
        setError(false)
      }, 4000);
      return;
    }
    const obj  = {
      nombre,
      propietario,
      email,
      date,
      sintomas
    };

    if (paciente.id) {
      obj.id = paciente.id
      const nuevospacientes = pacientes.map(pa => pa.id === paciente.id ? obj : pa);
      setPacientes(nuevospacientes)
      setPaciente ({});
    }else{
      obj.id =generarID()
      setPacientes([...pacientes,obj]);
    }

    setNombre('');
    setPropietario('');
    setEmail('');
    setDate('');
    setSintomas('');
  }


  return (
    <div className='md:w-1/2 lg:w-2/5 px-5' >
      <h1 className='font-bold text-4xl text-center '>Seguimiento Pacientes</h1>
      <p className='font-bold text-lg text-center '>Añade pacientes y  <span className='text-indigo-600'>Administradlos</span></p>
      
      <form action="" className='rounded-md drop-shadow-lg py-5 mt-8 px-5 bg-white' 
      onSubmit={handleSubmit}>
        {error && <Error mensaje={'Todos los campos deben estar llenos'}/>
        }
        <div>
          <label htmlFor="nombremascota" className='block text-gray-600 font-bold mb-3'>Nombre Mascota</label>
          <input 
          type="text" 
          name="" 
          id="nombremascota" 
          placeholder='Nombre de la mascota'
          className='p-2 border-2 rounded-md w-full mb-5'
          value={nombre}
          onChange={(e)=>setNombre(e.target.value)}/>
          
        </div>

        <div>
          <label htmlFor="propietario" className='block text-gray-600 font-bold mb-3'>Propietario</label>
          <input 
          type="text" 
          name="" 
          id="mb-5" 
          placeholder='Propietario'
          className='p-2 border-2 rounded-md w-full mb-5'
          value={propietario}
          onChange={(e)=>setPropietario(e.target.value)}
          />

        </div>
        <div>
          <label htmlFor="email" className='block text-gray-600 font-bold mb-3'>Email</label>
          <input 
          type="email" 
          name="" 
          id="email" 
          placeholder='Email'
          className='p-2 border-2 rounded-md w-full mb-5'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="alta" className='block text-gray-600 font-bold mb-3'>Fecha Alta</label>
          <input 
          type="date" 
          name="" 
          id="alta" 
          placeholder='Fecha Alta'
          className='p-2 border-2 rounded-md w-full mb-5'
          value={date}
          onChange={(e)=>setDate(e.target.value)}
          />
        </div>
        
        <div>
          <label htmlFor="sintomas" className='block text-gray-600 font-bold mb-3'>Síntomas</label>
          <textarea 
          id="sintomas" 
          placeholder='Escriba Síntomas'
          className='p-2 border-2 rounded-md w-full mb-5'
          value={sintomas}
          onChange={(e)=>setSintomas(e.target.value)}
          />
        </div>
        <input 
        type="submit" 
        value={paciente.id? "Editar" : "Agregar"}
        className='bg-indigo-600 p-3 text-white rounded-xs w-full font-black hover:bg-indigo-800 cursor-pointer transition-colors' />

      </form>
    </div>
    
  )
}

export default formulario