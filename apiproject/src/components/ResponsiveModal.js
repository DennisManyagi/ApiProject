import React, { Component} from 'react';
import Modal from 'react-responsive-modal';

//npm install react-modal

class ResponsiveModal extends Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div>
            <button onClick={this.onOpenModal}>New Feature</button>
        <Modal open={open} onClose={this.onCloseModal} center>
        <h2>Thanks for clicking feature coming soon!</h2>
        </Modal>
        </div>
    );
    }
}

export default ResponsiveModal