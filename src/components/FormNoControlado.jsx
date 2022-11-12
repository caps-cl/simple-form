import React, { useRef } from 'react'

export const FormNoControlado = () => {

  const formulario = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(formulario.current);
    const objetData = Object.fromEntries([...data.entries()])

    console.log(objetData) // mostrar los datos

  }

  return (
    <>
      <div>FormNoControlado</div>
      <form ref={formulario} onSubmit={handleSubmit}>
        <input 
          className="form-control mb-2"
          defaultValue="Tarea #01"
          name="todoName"
          placeholder="Ingrese TODO"
          type="text" 
        />
        <textarea 
          className="form-control mb-2"
          defaultValue="Descripcion tarea #01"
          name="todoDescripcion"
          placeholder="Ingrese Descripcion del TODO"
        />
        <select 
          className="form-control mb-2"
          defaultValue="pendiente"
          name="todoEstado"
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
        <button className="btn btn-outline-primary">Agregar</button>
      </form>
    </>
  )
}
