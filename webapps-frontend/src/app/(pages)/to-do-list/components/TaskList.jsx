import { useState } from "react"
import TaskForm from "./TaskForm"

function TaskItem({
  dataItem = {
    id: 0,
    name: '',
    status: true,
  },
  onEdit,
  onRemove
}) {
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (data) => {
    onEdit(dataItem.id, data)
    setShowForm(!showForm)
  }

  const handleShowForm = () => {
    setShowForm(!showForm)
  }

  return (
    <li>
      {
        showForm ?
          <TaskForm
            dataForm={dataItem}
            onHandleCancel={handleShowForm}
            onHandleSubmit={handleSubmit}
          /> :
          <>
            <p>{dataItem.name}</p>
            <p>{dataItem.status ? 'tarea completada ✔' : 'tarea incompleta ❌'}</p>
            <div>
              <button className="btn" onClick={() => setShowForm(!showForm)}>editar 🖋</button>
              <button className="btn" onClick={() => onRemove(dataItem.id)}>eliminar 🗑</button>
            </div>
          </>
      }
    </li>
  )
}

function TaskList({
  listData = [{
    id: 0,
    name: '',
    status: false
  }],
  onEdit,
  onRemove
}) {
  return (
    <ul className="list">
      {
        listData.map((data, index) =>
          <TaskItem
            key={index}
            dataItem={data}
            onEdit={onEdit}
            onRemove={onRemove}
          />
        )
      }
    </ul>
  )
}

export default TaskList
