import { useState } from "react";
const TaskList = (props) => {
  const { list } = props
  return (
    <ul>
      {list && list.map((i => {
        return (
          <li key={i.id}>{i.content}</li>
        )
      }))}
    </ul>
  )
}

export default TaskList