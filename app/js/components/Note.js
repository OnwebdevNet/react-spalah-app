import React, {Component, PropTypes} from 'react';

export default class Note extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let style = { backgroundColor: this.props.color };
        return (
            <div className="note-editor">
                <textarea
                    placeholder="Enter your note here..."
                    rows={5}
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
            </div>
        );
    }
}

