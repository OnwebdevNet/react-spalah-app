'use strict';

import React              from 'react';
import NotesApp           from './components/NotesApp';


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
        <NotesApp />
    );
  }

}

App.propTypes = propTypes;

export default App;
