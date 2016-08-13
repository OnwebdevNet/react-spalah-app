import React, {Component, PropTypes} from 'react';

export default class Note extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let style = { backgroundColor: this.props.color };
        return (
            <div className="note" style={style}>
                <span className="delete-note" onClick={this.props.onDelete}> × </span>
                {this.props.children}
            </div>
        );
    }
}

