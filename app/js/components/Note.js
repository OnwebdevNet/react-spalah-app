import React, {Component, PropTypes} from 'react';

export default class Note extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="note">
                <span className="delete-note" onClick={this.props.onDelete}> × </span>
                {this.props.children}
            </div>
        );
    }
}

