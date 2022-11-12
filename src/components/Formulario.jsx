import React, { useState } from 'react'
import { Error } from './Error'

export const Formulario = () => {

  const [error, setError] = useState(false)

  const [form, setForm] = useState({
    todoName: '',
    todoDescripcion: '',
    todoEstado: 'pendiente',
    todoCheckbox: false,
  })


  const handleSubmit = (event) => {
    event.preventDefault();

    const { todoName, todoDescripcion } = form

    if (todoName.trim().length <= 1 || todoDescripcion.trim().length <= 1) {
      setError(true)
      return
    }

    setForm({       // Reseteando el estado para que el form se limpie
      todoName: '',
      todoDescripcion: '',
      todoEstado: 'pendiente',
      todoCheckbox: false,
    })
  }

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value     // el input de tipo checkbox es diferente 
    });

    // setForm((oldForm) => ({    // Otra forma de hacer setForm
    //   ...oldForm,
    //   [name]: value
    // }))
  }

  return (
    <>
      <h2>Formulario Controlado</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="todoName"
          onChange={handleChange}
          placeholder="Ingrese TODO"
          type="text"
          value={form.todoName}
        />
        <textarea
          className="form-control mb-2"
          name="todoDescripcion"
          onChange={handleChange}
          placeholder="Ingrese Descripcion del TODO"
          value={form.todoDescripcion}
        />
        <select
          className="form-control mb-2"
          name="todoEstado"
          onChange={handleChange}
          value={form.todoEstado}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="todoCheckbox"
            onChange={handleChange}
            checked={form.todoCheckbox}  // value = checked
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Dar Prioridad
          </label>
        </div>
        {error && <Error />}
        <button className="btn btn-outline-primary">Agregar</button>
      </form>

    </>
  )
}
