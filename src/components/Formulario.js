import React, { Fragment, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

const Formulario = ({crearCita}) => {

// crear state de Citas

const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
});

// state de errores

const [error, actualizarError] = useState(false);


// funcion que se ejecuta cada vez que el usuario escribe en un input
 
const actualizarState = (e) => {

    actualizarCita({
    ...cita,
    [e.target.name] : e.target.value

    })
}

// Extraer los valores

const {mascota, propietario, fecha, hora, sintomas} = cita;

// cuando el usuario presiona agregar cita

const submitCita = (e) => {
    e.preventDefault();
  
    // Validar

    if(mascota.trim()== "" || propietario.trim() == "" || fecha.trim() == "" || fecha.trim() =="" || sintomas.trim() =="" ){
        actualizarError(true)
        return; 
    }
    // eliminar el mensaje previo
    actualizarError(false);

    // asignar id
    cita.id = uuidv4()
   
    // crear cita

    crearCita(cita);

    // reiniciar el form

    actualizarCita({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
    })

}


return (
        <Fragment>
        <h2>Crear Cita</h2>

        {error ? <p className='alerta-error'>Todos los campos son obligatorios</p>
        : null
         }
        <form
        onSubmit={submitCita}
        >
<label>Nombre Mascota:</label>
<input
    type='text'
    name="mascota"
    className="u-full-width"
    placeholder="Nombre Mascota"
    onChange={actualizarState}
    value={mascota}
/>
<label>Nombre del Dueño:</label>
<input
    type='text'
    name="propietario"
    className="u-full-width"
    placeholder="nombre dueño de la mascota"
    onChange={actualizarState}
    value={propietario}
/>
<label>Fecha:</label>
<input
    type='date'
    name="fecha"
    className="u-full-width"
    value={fecha}
    onChange={actualizarState}
/>
<label>hora:</label>
<input
    type='time'
    name="hora"
    className="u-full-width"
    onChange={actualizarState}
    value={hora}
/>
<label>Sintomas</label>
<textarea className="u-full-width"
name="sintomas"
onChange={actualizarState}
value={sintomas}
></textarea>

<button
type="submit"
className="u-full-width button-primary"
>Agregar Cita</button>
        </form>

        </Fragment>
    )


}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;