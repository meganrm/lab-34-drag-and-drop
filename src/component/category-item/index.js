import React from 'react';
import PropTypes from 'prop-types';

import CategoryForm from '../category-form';
import { CategoryType } from '../../state/types';
import DropZone from '../drop-zone';

import './category-item.scss';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  handleChangeCategory(expense) {
    const {
      categoryID,
      expenseCreate,
      expenseDelete,
    } = this.props;
    expenseDelete(expense);
    expense.categoryID = categoryID;
    expenseCreate(expense);
  }

  render() {
    return (
      <DropZone handleDrop={this.handleChangeCategory}>
        <div className="category-item">
          <h2> {this.props.category.name} </h2>
          <button
            onClick={() => this.props.categoryRemove(this.props.category)}
            className="delete-button"
          > x
          </button>
          <CategoryForm category={this.props.category} onComplete={this.props.categoryUpdate} />
        </div>
      </DropZone>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.shape(CategoryType).isRequired,
  categoryRemove: PropTypes.func.isRequired,
  categoryUpdate: PropTypes.func.isRequired,
};

export default CategoryItem;
