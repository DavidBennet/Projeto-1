import { ClipboardText } from "phosphor-react";
import { Task } from "./Task";

import styles from "./Tasks.module.css";



export function Tasks({ tasks, handleTaskClick, handleTaskDeletion }) {
  return(
    <main className={styles.main}>
      
      <header className={styles.header}>
        <div className={styles.div1}>Tarefas Criadas</div>
        <div className={styles.div2}>Concluídas</div>
      </header>


      <div className={styles.body}>
        {/* <div>
          <ClipboardText size={56} className={styles.iconBoard}/>
          <p className={styles.p1}>Você ainda não tem tarefas cadastradas</p>
          <p className={styles.p2}>Crie tarefas e organize seus itens a fazer</p>
        </div> */}
        {tasks.map((task) => (
          <Task task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
        ))}
        
      </div>
    </main>
  )
}