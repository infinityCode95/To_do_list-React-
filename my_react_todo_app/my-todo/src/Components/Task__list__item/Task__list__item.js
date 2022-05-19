import React from 'react';

import './Task__list__item.css';

const TaskListItem = (props) => {
    
     let classNames='item item__wrapper';

     if (props.active) {
          classNames = classNames + ' active'
     }

     return (
          <li className={classNames}>
               <span className='item__title'>{props.taskName}</span>

               <div className="item__btns">
                    <button className='item__btn' onClick={props.onToggleActive}>
                         <i className="fa-solid fa-circle-check"></i>
                    </button>  

                    <button className='item__btn btn__trash' onClick={props.onDelete}>
                         <i className="fa-solid fa-trash-can"></i>
                    </button>   
               </div>
          </li>          
     );
     
}

export default TaskListItem; 