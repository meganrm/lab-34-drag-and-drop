import React from 'react';
import PropTypes from 'prop-types';

import ExpenseType from '../../state/types';

class Draggable extends React.Component {
  constructor(props) {
    super(props);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
    this.state = {
      dragging: false,
    };
  }

  handleDragStart(e) {
    const item = JSON.stringify(this.props.item);
    e.dataTransfer.setData('text/json', item);
    this.setState({
      dragging: true,
    });
  }

  handleDragEnd() {
    this.setState({
      dragging: false,
    });
  }

  render() {
    return (
      <div
        draggable="true"
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
      >
        {this.props.children}
      </div>
    );
  }
}

Draggable.propTypes = {
  item: PropTypes.shape(ExpenseType).isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Draggable;
