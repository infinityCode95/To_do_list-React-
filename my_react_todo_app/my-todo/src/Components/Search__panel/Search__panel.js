import React from 'react';

import './Search__panel.css';

class SearchPanel extends React.Component {

     constructor(props) {
          super(props);
          this.state = {

          }
     }

     render () {
          return (
               <input className='search__input' type="text" placeholder='Найти задачу' />
          );
     }
}

export default SearchPanel; 