'use strict';

import React              from 'react';
import NoteList           from './components/NoteList';
import ModalWindow        from './components/ModalWindow';


let notes = JSON.parse(localStorage.getItem('notes')) || [];

const propTypes = {
  params: React.PropTypes.object,
  query: React.PropTypes.object,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object
  ])
};

class App extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <NoteList notes={notes} />
        <ModalWindow/>
      </div>
    );
  }

}

App.propTypes = propTypes;

export default App;
