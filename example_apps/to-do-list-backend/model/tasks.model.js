const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../tasks.json');

const readTasksFile = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

const writeTasksFile = (tasks) => {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf8');
}

const tasks = readTasksFile()

const getAll = async () => {
  return readTasksFile
}

const getById = async (id) => {
  const task = tasks.find(task => task.id === id)
  return task
}

const create = async (values) => {
  const newTask = {
    id: new Date().getTime(),
    name: values.name,
    status: values.status
  }

  tasks.push(newTask)
  writeTasksFile(tasks);
  return newTask
}

const update = async (id, values) => {
  const taskIndex = tasks.findIndex(task => task.id === id)
  if (taskIndex === -1) return false

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    ...values
  }

  writeTasksFile(tasks);
  return tasks[taskIndex]
}

const remove = async (id) => {
  const taskIndex = tasks.findIndex(task => task.id === id)
  if (taskIndex === -1) return false

  tasks.splice(taskIndex, 1)

  writeTasksFile(tasks);
  return true;
}

module.exports = {
  create,
  remove,
  getAll,
  getById,
  update,
}
