import React from 'react';
import PropTypes from 'prop-types';

import Draggable from '../draggable';
import ExpenseType from '../../state/types';

import './expense-item.scss';

class ExpenseItems extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    const {
      expense,
    } = this.props;
    this.state = {
      name: expense.name,
      cost: expense.cost,
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      expense,
    } = this.props;
    const updatedExpense = {
      ...this.state,
      id: expense.id,
      categoryID: expense.categoryID,
    };
    this.props.expenseUpdate(updatedExpense);
  }

  render() {
    const {
      expense,
      expenseDelete,
    } = this.props;

    return (
      <div className="expense-item">
        <Draggable item={expense}>

          <button onClick={() => expenseDelete(expense)}> x </button>

          <form
            className="expense-item"
            onSubmit={this.handleSubmit}
          >
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              name="cost"
              type="number"
              value={this.state.cost}
              onChange={this.handleChange}
            />
            <button type="submit"> update expense </button>
          </form>
        </Draggable>
      </div>
    );
  }
}

ExpenseItems.propTypes = {
  expense: PropTypes.shape(ExpenseType).isRequired,
  expenseUpdate: PropTypes.func.isRequired,
  expenseDelete: PropTypes.func.isRequired,
};

export default ExpenseItems;
