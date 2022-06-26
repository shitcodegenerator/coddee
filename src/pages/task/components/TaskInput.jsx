import { useState } from 'react'
const TaskInput = (props) => {
  const [task, setTask] = useState('')
  const onTaskInput = (e) => {
    setTask(() => e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()
    if (!task) return
    props.onSubmit(task)
    setTask('')
  }

  return (
    <div>
      <input type="text" value={task} onInput={onTaskInput} />
      <button onClick={submit}>add</button>
    </div>
  )
}

export default TaskInput
