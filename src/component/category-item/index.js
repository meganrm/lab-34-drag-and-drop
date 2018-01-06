import React from 'react';
import PropTypes from 'prop-types';

import CategoryForm from '../category-form';
import { CategoryType } from '../../state/types';

import './category-item.scss';

class CategoryItem extends React.Component {
  render() {
    return (
      <div className="category-item">
        <h2> {this.props.category.name} </h2>
        <button
          onClick={() => this.props.categoryRemove(this.props.category)}
          className="delete-button"
        > x
        </button>
        <CategoryForm category={this.props.category} onComplete={this.props.categoryUpdate} />
      </div>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.shape(CategoryType).isRequired,
  categoryRemove: PropTypes.func.isRequired,
  categoryUpdate: PropTypes.func.isRequired,
};

export default CategoryItem;
