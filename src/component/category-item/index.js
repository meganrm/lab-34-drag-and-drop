import React from 'react';
import CategoryForm from '../category-form';
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

export default CategoryItem;
