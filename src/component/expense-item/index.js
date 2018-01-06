import React from 'react';
import PropTypes from 'prop-types';

import Draggable from '../draggable';

import './expense-item.scss';

class ExpenseItem extends React.Component {
  render() {
    const {
      expenses,
      categoryID,
      expenseDelete,
    } = this.props;

    return (
      <div className="expense-item">
        {expenses[categoryID].map(expense =>
          (
            <Draggable item={expense}>
              <div key={expense.id}>
                <p> {(expense.name)} </p>
                <button onClick={() => expenseDelete(expense)}> x </button>
              </div>
            </Draggable>
          ))}
      </div>
    );
  }
}

ExpenseItem.propTypes = {
  categoryID: PropTypes.string.isRequired,
  expenses: PropTypes.object.isRequired,
  expenseDelete: PropTypes.func.isRequired,
};

export default ExpenseItem;
