import TaskListItem from '../Task__list__item/Task__list__item'; 

import './Task__list.css';

const TaskList = (props) => {

     const elements = props.tasksData.map(elem => {
          return (
               <TaskListItem 
                    taskName={elem.taskName}
                    active={elem.active}
                    key={elem.id}
                    onDelete={() => props.onDelete(elem.id)}
                    onToggleActive={() => props.onToggleActive(elem.id)}
               />
          )
     })

     return (
          <ul className='task__list'>
               {elements}
          </ul>
     );      
}

export default TaskList; 