import React from 'react';
import PropTypes from 'prop-types';

class DropZone extends React.Component {
  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);

    this.state = {
      droppable: false,
    };
  }

  handleDragOver(e) {
    e.preventDefault();
    this.setState({
      droppable: true,
    });
  }

  handleDrop(e) {
    e.preventDefault();
    const payload = e.dataTransfer.getData('text/json');
    const card = JSON.parse(payload);
    this.props.handleDrop(card);
    this.setState({
      droppable: false,
    });
  }

  render() {
    return (
      <div
        onDrop={this.handleDrop}
        onDragOver={this.handleDragOver}
      >
        {this.props.children}
      </div>
    );
  }
}

DropZone.propTypes = {
  handleDrop: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default DropZone;
