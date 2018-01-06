import React from 'react';
import './expense-item.scss';

class ExpenseItem extends React.Component {
  render() {
    return (
      <div className="expense-item">
        {this.props.expenses[this.props.categoryID].map(expense =>
          (
            <div key={expense.id}>
              <p> {(expense.name)} </p>
              <button onClick={() => this.props.expenseDelete(expense)}> x </button>
            </div>
          ))}
      </div>
    );
  }
}

export default ExpenseItem;
