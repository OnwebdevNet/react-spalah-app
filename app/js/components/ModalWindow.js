import React, {Component, PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import NoteEditor from './NoteEditor';

export default class Modal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                { (() => {
                    if(this.props.isOpen){
                        return (
                            <ReactCSSTransitionGroup transitionName={this.props.transitionName} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                                <div className="modal">
                                    {this.props.children}
                                </div>
                            </ReactCSSTransitionGroup>
                        );
                    } else {
                        return <ReactCSSTransitionGroup transitionName={this.props.transitionName} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300} />;
                    }
                })()}
            </div>
        );
    }
}

export default class ModalWindow extends Component {
    constructor(props) {
        super(props);
        this.props.note;
        this.state = {
            isModalOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    
    openModal() {
        this.setState({ isModalOpen: true });
    }

    closeModal() {
        this.setState({ isModalOpen: false });
    }

    render() {
        return (
            <div className="wrapper">
                <button onClick={this.openModal}>Add Note</button>
                <Modal isOpen={this.state.isModalOpen}
                       transitionName="modal-anim">
                    <div className="body">
                        <NoteEditor onNoteAdd={this.handleNoteAdd} />
                    </div>
                    <button onClick={this.closeModal}>Close modal</button>
                </Modal>
            </div>
        );
    }
}