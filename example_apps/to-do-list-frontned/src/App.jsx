import './App.css'
import { useState, useEffect } from 'react'
import { getAllTask } from './services/taskApi'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskTable from './components/TaskTable'
import TaskCard from './components/TaskCard'

function App() {
  const viewOptions = ['list', 'table', 'card'];

  const [listTasks, setListTasks] = useState([])
  const [viewOption, setViewOption] = useState(viewOptions[0])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllTask();
        setListTasks(data);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    fetchData();
  }, []);

  const handleViewOptions = (data) => {
    setViewOption(data)
  }

  const handleCreate = (data = { name: '', status: false }) => {
    const copyTask = [...listTasks]
    const newTask = {
      id: new Date().getTime(),
      name: data.name,
      status: data.status
    }
    copyTask.unshift(newTask)
    setListTasks(copyTask)
    setShowForm(!showForm)
  }

  const handleEdit = (
    dataId = 0,
    data = { name: '', status: false }
  ) => {
    const copyTask = [...listTasks]
    const resultTasks = copyTask.find((task) => task.id === dataId)
    resultTasks.name = data.name
    resultTasks.status = data.status
    setListTasks(copyTask)
  }

  const handleRemove = (dataId) => {
    const resultTasks = listTasks.filter((task) => task.id !== dataId)
    setListTasks(resultTasks)
  }

  const tableData = {
    headers: ['tarea', 'completada', 'modificar', 'borrar'],
    columns: listTasks
  }

  return (
    <main>
      <header>
        <h1 className="text-center text-uppercase">to do list</h1>
      </header>
      -
      <section className="flex content-between items-center p-1">
        {
          showForm ?
            <TaskForm
              onHandleCancel={() => setShowForm(!showForm)}
              onHandleSubmit={handleCreate}
            /> :
            <button className="btn" onClick={() => setShowForm(!showForm)}>crear tarea ➕</button>
        }

        <div className="flex items-center gap-1">
          <span>vista como</span>
          <button className={`btn ${viewOption === viewOptions[0] && 'disabled'}`} onClick={() => handleViewOptions(viewOptions[0])}>lista</button>
          <button className={`btn ${viewOption === viewOptions[1] && 'disabled'}`} onClick={() => handleViewOptions(viewOptions[1])}>tabla</button>
          <button className={`btn ${viewOption === viewOptions[2] && 'disabled'}`} onClick={() => handleViewOptions(viewOptions[2])}>tarjeta</button>
        </div>
      </section>

      <section>
        {
          viewOption === viewOptions[0] &&
          <TaskList
            listData={listTasks}
            onEdit={handleEdit}
            onRemove={handleRemove}
          />
        }

        {
          viewOption === viewOptions[1] &&
          <TaskTable
            tableData={tableData}
            onEdit={handleEdit}
            onRemove={handleRemove}
          />
        }

        {
          viewOption === viewOptions[2] &&
          <div className='flex flex-wrap gap-2'>
            {
              listTasks.map((task, index) =>
                <TaskCard
                  key={index}
                  taskData={task}
                  onEdit={handleEdit}
                  onRemove={handleRemove}
                />
              )
            }
          </div>
        }
      </section>
    </main>
  )
}

export default App
