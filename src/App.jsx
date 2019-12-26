import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import {
  createMuiTheme, ThemeProvider, Grid,
} from '@material-ui/core';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import JobSteps from './snapshot/JobSteps';
import GetServerMessage from './testing-library/GetServerMessage';
import ToDoList from './redux/ToDoList';
import reducers from './redux/reducers';

const store = createStore(
  combineReducers({
    todo: reducers,
  }),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Grid item sm={6}>
          Please select a component to demo:
          <ul>
            <li>
              <Link to="/job-steps">JobSteps</Link>
            </li>
            <li>
              <Link to="/get-server-message">GetServerMessage</Link>
            </li>
            <li>
              <Link to="/to-do-list">ToDoList</Link>
            </li>
          </ul>
          <hr />
        </Grid>
        <Grid item sm={12}>
          <Switch>
            <Route exact path="/job-steps">
              <JobSteps step={1} total={3} />
            </Route>
            <Route exact path="/get-server-message">
              <GetServerMessage />
            </Route>
            <Route exact path="/to-do-list">
              <ToDoList />
            </Route>
          </Switch>
        </Grid>
      </Router>
    </ThemeProvider>
  </Provider>
);

export default App;
