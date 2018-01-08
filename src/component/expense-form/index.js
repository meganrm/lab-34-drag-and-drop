import React from 'react';
import PropTypes from 'prop-types';

import DropZone from '../drop-zone';
import ExpenseItems from '../expense-item';

const emptyState = {
  name: '',
  cost: 0,
};

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      cost: 0,
      categoryID: this.props.categoryID,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  render() {
    const {
      expenseDelete,
      expenseUpdate,
    } = this.props;
    return (
      <div className="category-form">
        <form
          className="expense-form"
          onSubmit={this.handleSubmit}
        >
          <input
            name="name"
            placeholder="expense item"
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
          <button type="submit"> create expense </button>
        </form>
        {this.props.expenses[this.state.categoryID].map(expense =>
          (<ExpenseItems
            key={expense.id}
            expenseDelete={expenseDelete}
            expenseUpdate={expenseUpdate}
            expense={expense}
            categoryID={this.state.categoryID}
          />))}

      </div>
    );
  }
}

ExpenseForm.propTypes = {
  categoryID: PropTypes.string.isRequired,
  onComplete: PropTypes.func.isRequired,
  expenses: PropTypes.object.isRequired,
  expenseUpdate: PropTypes.func.isRequired,
  expenseDelete: PropTypes.func.isRequired,
};

export default ExpenseForm;
