import { addTodo } from './actions';
import { ADD_TODO } from './actionTypes';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs';

    const action = addTodo(text);

    expect(action).toEqual({
      type: ADD_TODO,
      text: 'Finish docs',
    });
  });
});
