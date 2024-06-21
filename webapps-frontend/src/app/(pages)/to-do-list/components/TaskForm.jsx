import { useState } from "react"

function TaskForm({
  dataForm = {
    name: '',
    status: false
  },
  onHandleCancel = () => null,
  onHandleSubmit = () => null
}) {
  const [name, setName] = useState(dataForm.name)
  const [status, setStatus] = useState(dataForm.status)

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  const handleChangeStatus = (event) => {
    setStatus(!status)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onHandleSubmit({ name, status })
    setName('')
    setStatus(false)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="NAME">Tarea</label>
        <input
          className="text-stone-900"
          id="NAME"
          name="name"
          onChange={handleChangeName}
          type="text"
          value={name}
        />
      </div>

      <div>
        <label htmlFor="STATUS">Estado</label>
        <input
          className="text-stone-900"
          defaultChecked={status}
          id="STATUS"
          name="status"
          onChange={handleChangeStatus}
          readOnly={true}
          type="checkbox"
        />
      </div>

      <div>
        <button className='btn'>guardar</button>
        <button type="reset" className='btn' onClick={onHandleCancel}>cancelar</button>
      </div>
    </form>
  )
}

export default TaskForm
