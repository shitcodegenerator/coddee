import { useState } from "react"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"



const Task = () => {
  const [list, addTaskToList] = useState([])
  const submit = (content) => {
    console.log(content)
    addTaskToList(() => [...list, {
      content,
      id: Math.random().toFixed(1)
    }])
  }
  return (
    <div>
      <TaskInput onSubmit={submit} />
      <TaskList list={list} />
    </div>
  )
}

export default Task