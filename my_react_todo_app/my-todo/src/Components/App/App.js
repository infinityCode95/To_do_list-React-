import React from 'react';

import Appinfo from '../App__info/App__info';
import TaskList from '../Task__list/Task__list';
import TaskAdd from '../Task__add/Task__add';

import './App.css'


class App extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               tasksData: [
                    {taskName: 'Сходить в магазин', active: false, id: 1},
                    {taskName: 'Выкинуть мусор', active: true, id: 2},
                    {taskName: 'Помыть машину', active: false, id: 3},
               ],

               searchString: ''               
          }
          
          this.maxId = 4;
     }

     deleteTask = (id) => {
          this.setState(({tasksData}) => {
               return {
                    tasksData: tasksData.filter(item => item.id !== id)
               }
          })
     }

     addTask = (taskName) => {
          
          const newTask = {
               taskName,
               active: false,
               id: this.maxId++
          }

          this.setState(({tasksData}) => {

               const newArr = [...tasksData, newTask];

               return {
                    tasksData: newArr      
               }

          });
     }

     onToggleActive = (id) => {
          this.setState(({tasksData}) => ({
               tasksData: tasksData.map(elem => {

                    if (elem.id === id) {
                         return {...elem, active: !elem.active}
                    }

                    return elem;
               })
          }))
     }

     searchTask = (elements, searchString) => {
           
          if (searchString.length === 0) {
               return elements;
          }

          return elements.filter(elem => {
               return elem.taskName.indexOf(searchString) > -1
          })
     }

     render() {

          const allTasks = this.state.tasksData.length;
          const completedTasks = this.state.tasksData.filter(elem => elem.active).length;

          return (
               <div className="app">
                    <Appinfo allTasks={allTasks} completedTasks={completedTasks}/>

                    <TaskList 
                         tasksData={this.state.tasksData} 
                         onDelete={this.deleteTask} 
                         onToggleActive={this.onToggleActive}
                    />

                    <TaskAdd onAdd={this.addTask}/>
               </div>
          )
     }
}


export default App;