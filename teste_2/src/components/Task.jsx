import { Trash } from "phosphor-react";

import styles from "./Task.module.css";


export function Task({ task, handleTaskClick, handleTaskDeletion }) {
    return(
    <>
      <div className={styles.task} style={task.completed ? { borderLeft: "0.5rem solid var(--Danger-500)"} : { borderLeft: "0.5rem solid var(--Blue-500)" }}>
        <div onClick={() => handleTaskClick(task.id)} className={styles.text}>
          {task.title}
        </div>
        <Trash className={styles.trash} onClick={() => handleTaskDeletion(task.id)}/>
      </div>
    </>
  )
}

