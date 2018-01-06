import PropTypes from 'prop-types';

export const CategoryType = {
  id: PropTypes.string,
  created: PropTypes.number,
  name: PropTypes.string,
  budget: PropTypes.number,
};

export const ExpenseType = {
  id: PropTypes.string,
  created: PropTypes.number,
  categoryID: PropTypes.string,
  name: PropTypes.string,
  cost: PropTypes.number,
};
