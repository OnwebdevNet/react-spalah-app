import React         from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import NoteList           from './NoteList';

class Modal extends React.Component {
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

class ModalWindow extends React.Component {
    constructor(props) {
        super(props);
        this.props.note;
        this.state = {
            isModalOpen: false
        };
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
                <button onClick={this.openModal}>Open modal</button>
                <Modal isOpen={this.state.isModalOpen}
                       transitionName="modal-anim">
                    <h3>My Modal</h3>
                    <div className="body">
                        <input type="text" ref="myInput" />
                        <button onClick={NoteList.addNote}>Add</button>
                    </div>
                    <button onClick={this.closeModal}>Close modal</button>
                </Modal>
            </div>
        );
    }
}

export default ModalWindow;