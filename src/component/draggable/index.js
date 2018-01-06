import React from 'react';

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

  handleDragEnd(e) {
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

export default Draggable;
