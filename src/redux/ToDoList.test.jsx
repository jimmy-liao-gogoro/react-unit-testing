import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import ToDoList from './ToDoList';
import reducers from './reducers';

const store = createStore(combineReducers({ todo: reducers }));
const renderComponent = () => render(
  <Provider store={store}>
    <ToDoList />
  </Provider>,
);

describe('<ToDoList />', () => {
  it('should render init state: Use Redux', () => {
    const { getByText } = renderComponent();

    const cell = getByText('Use Redux');

    expect(cell).toBeInTheDocument();
  });

  it('should render added item after user adds 1 item', () => {
    const { getByText, getByLabelText } = renderComponent();
    const button = getByText('Add To-Do Item');
    const input = getByLabelText('Item');
    fireEvent.change(input, { target: { value: 'Add Testing' } });

    fireEvent.click(button);

    const cell = getByText('Add Testing');
    expect(cell).toBeInTheDocument();
  });
});
