import React from "react";

import './Task__add.css';

class TaskAdd extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               taskName: '',
          }
     }

     onValueTaskName = (e) => {
          this.setState({
               taskName: e.target.value
          })
     }

     onSubmit = (e) => {
          e.preventDefault();

          if (this.state.taskName.length < 1) {
               return;
          }

          this.props.onAdd(this.state.taskName);
          this.setState({
               taskName: ''
          })
     }

     render() {

          return (
               <div className="app__add">
                    <h3 className="add__title">Добавьте новую задачу</h3>
                    <form className="add__form" onSubmit={this.onSubmit}>
                         <input type="text" 
                         className="add__input" 
                         placeholder="Что нужно сделать?" 
                         onChange={this.onValueTaskName} 
                         value={this.state.taskName}
                    />
                         <button type="submit" className="add__btn ">Добавить</button>
                    </form>
               </div>
          );
     }
}

export default TaskAdd; 