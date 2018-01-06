import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import { CategoryType } from '../../state/types';
import ExpenseForm from '../expense-form';
import * as category from '../../action/category';
import * as expense from '../../action/expense';

import './_dashboard.scss';

class Dashboard extends React.Component {
  componentWillMount() {
  }

  componentDidUpdate() {
    console.log('__CATEGORIES__', this.props.categories);
    console.log('__EXPENSES__', this.props.expenses);
  }

  render() {
    const {
      categories,
      categoryCreate,
      categoryRemove,
      categoryUpdate,
      expenseCreate,
      expenses,
      expenseDelete,
    } = this.props;
    return (
      <div className="dashboard">
        <h1> budget manager </h1>
        <CategoryForm id="main-form" onComplete={categoryCreate} />
        <div className="category-wrapper">
          {categories.map(cat =>
            (
              <div key={cat.id}>
                <CategoryItem
                  category={cat}
                  categoryID={cat.id}
                  categoryRemove={categoryRemove}
                  categoryUpdate={categoryUpdate}
                  expenseDelete={expenseDelete}
                  expenseCreate={expenseCreate}
                />
                <ExpenseForm
                  onComplete={expenseCreate}
                  categoryID={cat.id}
                  expenses={expenses}
                  expenseDelete={expenseDelete}
                />
              </div>
          ))}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape(CategoryType)).isRequired,
  expenses: PropTypes.object.isRequired,
  categoryCreate: PropTypes.func.isRequired,
  categoryUpdate: PropTypes.func.isRequired,
  categoryRemove: PropTypes.func.isRequired,
  expenseCreate: PropTypes.func.isRequired,
  expenseDelete: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories || [],
  expenses: state.expenses || {},
});

const mapDispatchToProps = dispatch => ({
  categoryCreate: data => dispatch(category.create(data)),
  categoryUpdate: data => dispatch(category.update(data)),
  categoryRemove: data => dispatch(category.destroy(data)),
  expenseCreate: data => dispatch(expense.create(data)),
  expenseDelete: data => dispatch(expense.destroy(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
