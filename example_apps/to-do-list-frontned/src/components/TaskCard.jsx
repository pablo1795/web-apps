import { useState } from "react"
import TaskForm from "./TaskForm"

function TaskCard({
  taskData = {
    id: 0,
    name: '',
    status: false,
  },
  onEdit,
  onRemove
}) {
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (data) => {
    onEdit(taskData.id, data)
    setShowForm(!showForm)
  }

  return (
    <section className="card">
      <p>id: {taskData.id}</p>
      {
        showForm ?
          <TaskForm
            dataForm={taskData}
            onHandleCancel={() => setShowForm(!showForm)}
            onHandleSubmit={handleSubmit}
          /> :
          <>
            <p>{taskData.name}</p>
            <p>{taskData.status ? 'tarea completada ✔' : 'tarea incompleta ❌'}</p>
            <div>
              <button className="btn" onClick={() => setShowForm(!showForm)}>editar 🖋</button>
              <button className="btn" onClick={() => onRemove(taskData.id)}>eliminar 🗑</button>
            </div>
          </>
      }
    </section>
  )
}

export default TaskCard
