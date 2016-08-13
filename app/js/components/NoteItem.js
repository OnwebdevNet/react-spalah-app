import React from 'react';

class NoteItem extends React.Component {
    constructor(props) {
        super(props);
        this.props.note;
        this.deleteNote = this.deleteNote.bind(this);
    }

    deleteNote() {
        this.props.deleteNote(this.props.note);
    }

    render() {
        return (
            <li onClick={this.deleteNote}>{this.props.note}</li>
        );
    }
}

export default NoteItem;