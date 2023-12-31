import { useState } from 'react'
import Mensaje from './Mensaje'
import Cerrar from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {

    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')

    const ocultarModal = () =>{
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 300)
        
    }

    const handleSubmit = e =>{
        e.preventDefault()
        if([nombre,cantidad,categoria].includes('')){
            setMensaje('Todos los campos son obligatorios');
            setTimeout(() => {
                setMensaje('')
            }, 3000)
            return
        }
        guardarGasto({nombre, cantidad, categoria})
        
    }
  return (
    <div className='modal'>
        <div className="cerrar-modal">
            <img 
            src={Cerrar} 
            alt="cerrar" 
            onClick={ocultarModal}/>
        </div>

        <form 
        onSubmit={handleSubmit}
        className={`formulario ${animarModal? 'animar': 'cerrar'}`}
        >
            <legend>Nuevo Gasto</legend>
            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
            <div className='campo'>
                <label htmlFor="nombre">Nombre Gasto</label>
                <input 
                    id='nombre'
                    type="text" 
                    placeholder='Añade el Nombre del Gasto'
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className='campo'>
                <label htmlFor="cantidad">Cantidad Gasto</label>
                <input 
                    id='cantidad'
                    type="number" 
                    placeholder='Añade la Cantidad del Gasto'
                    value={cantidad}
                    onChange={e => setCantidad(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label htmlFor="categoria">Categoria</label>
                <select name="" 
                id="categoria"
                value={categoria}
                onChange={ e => setCategoria(e.target.value)}>
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="ocio">Ocio</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="salud">Salud</option>
                    <option value="estudio">Estudio</option>
                </select>
                <input 
                type="submit" 
                value='Añadir Gasto'/>
            </div>

        </form>
    </div>
  )
}

export default Modal