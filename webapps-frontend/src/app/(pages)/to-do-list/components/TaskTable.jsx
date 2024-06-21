import { useState } from "react"
import TaskForm from "./TaskForm"

function Row({
  dataRow = {
    id: 0,
    name: '',
    status: true,
  },
  onEdit,
  onRemove
}) {
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (data) => {
    onEdit(dataRow.id, data)
    setShowForm(!showForm)
  }

  const handleShowForm = () => {
    setShowForm(!showForm)
  }

  return (
    <tr>
      {
        showForm ?
          <td colSpan={4}>
            <div className="flex content-center">
              <TaskForm
                dataForm={dataRow}
                onHandleCancel={handleShowForm}
                onHandleSubmit={handleSubmit}
              />
            </div>
          </td> :
          <>
            <td>{dataRow.name || '-'}</td>
            <td>{dataRow.status ? 'tarea completada ✔' : 'tarea incompleta ❌'}</td>
            <td><button className="btn" onClick={handleShowForm}>editar 🖋</button></td>
            <td><button className="btn" onClick={() => onRemove(dataRow.id)}>eliminar 🗑</button></td>
          </>
      }
    </tr>
  )
}

function TaskTable({
  tableData = {
    headers: [''],
    columns: [{
      id: 0,
      name: '',
      status: true,
    }]
  },
  onEdit,
  onRemove
}) {
  return (
    <table className="table">
      <thead>
        <tr>
          {
            tableData.headers.map((data, index) =>
              <th key={index}>{data || '-'}</th>
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          tableData.columns.map((data, index) =>
            <Row
              key={index}
              dataRow={data}
              onEdit={onEdit}
              onRemove={onRemove}
            />
          )
        }
      </tbody>
    </table>
  )
}

export default TaskTable
