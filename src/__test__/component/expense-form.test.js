import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import ExpenseForm from '../../component/expense-form';

configure({ adapter: new Adapter() });

describe('Expense-Form', () => {
  let categoryID;
  let onComplete;
  let expenses;
  let expenseUpdate;
  let expenseDelete;
  beforeEach(() => {
    categoryID = 'categoryID';
    expenses = {
      categoryID: [{
        id: 'expenseid',
        created: Date.now(),
        categoryID: 'id',
        name: 'name',
        cost: 90,
      }],
    };
    expenseUpdate = sinon.spy();
    expenseDelete = sinon.spy();
    onComplete = sinon.spy();
  });
  test('it calls on complete when submitted', () => {
    const wrapper = shallow(<ExpenseForm
      expenses={expenses}
      categoryID={categoryID}
      expenseUpdate={expenseUpdate}
      expenseDelete={expenseDelete}
      onComplete={onComplete}
    />);
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(onComplete.calledOnce).toEqual(true);
  });
  test('it updates state on change', () => {
    const wrapper = shallow(<ExpenseForm
      expenses={expenses}
      categoryID={categoryID}
      expenseUpdate={expenseUpdate}
      expenseDelete={expenseDelete}
      onComplete={onComplete}
    />);
    wrapper.find('input[name="name"]').simulate('change', {
      target: {
        name: 'name',
        value: 'targetValue',
      },
    });
    expect(wrapper.state()).toEqual({ categoryID: 'categoryID', cost: 0, name: 'targetValue' });
  });
});
