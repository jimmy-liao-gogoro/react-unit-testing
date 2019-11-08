import reducers from './reducers';
import { addTodo } from './actions';

describe('todos reducers', () => {
  it('should return the initial state', () => {
    const state = undefined;
    const action = {};

    const newState = reducers(state, action);

    expect(newState).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ]);
  });

  it('should handle ADD_TODO', () => {
    const state = [
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ];
    const action = addTodo('Run the tests');

    const newState = reducers(state, action);

    expect(
      newState,
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 1,
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ]);
  });
});
