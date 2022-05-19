import React from 'react';

import './App__filter.css';

const AppFilter = (props) => {
     return (
          <div className="btn__wrapper">

               <button type='button' className='btn btn__active'>
                    Все задачи
               </button>

               <button className='btn'>
                    Выполненные
               </button>

          </div>
     );
}

export default AppFilter;