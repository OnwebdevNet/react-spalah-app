import React         from 'react';
import ReactDom from 'react-dom';
import NoteItem from './NoteItem';

class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: this.props.notes
        };
        this.deleteNote = this.deleteNote.bind(this);
        this.addNote = this.addNote.bind(this);
    }

    addNote() {
        var notes = this.props.notes;
        notes.push(ReactDom.findDOMNode(this.refs.myInput).value);
        ReactDom.findDOMNode(this.refs.myInput).value = "";
        localStorage.setItem('notes', JSON.stringify(notes));
        this.setState({ notes: notes });
    }

    deleteNote(note) {
        var notes = this.props.todos;
        notes.splice(notes.indexOf(note), 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        this.setState({ notes: notes });
    }

    render() {
        return (
            <ul>
                {this.notes.map((note) => {
                        return <NoteItem note={note} delete={this.deleteNote} />
                 })}
            </ul>
        );
    }
}

export default NoteList;