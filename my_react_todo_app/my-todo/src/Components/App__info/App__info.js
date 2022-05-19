
import './App__info.css';


const AppInfo = (props) => {
     return (
          <div className="app__info">
               <h1>Todo List</h1>
               <h2>Всего дел : {props.allTasks} </h2>
               <h2>Выполнено : {props.completedTasks}</h2>
          </div>
     );
}

export default AppInfo; 