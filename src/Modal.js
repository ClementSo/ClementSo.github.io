import React from 'react';
import './App.css';

class Modal extends React.Component {
  render() {
    return (
      <div className={"modal "+this.props.showModal}>
        <div className="modal-content">
          <p>{this.props.nameModal}</p>
          <span onClick={this.props.closeModal}>close</span>
        </div>
      </div>
    );
  }
}

export default Modal;
