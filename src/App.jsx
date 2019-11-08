import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {
  createMuiTheme, ThemeProvider,
} from '@material-ui/core';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import JobSteps from './snapshot/JobSteps';
import GetServerMessage from './testing-library/GetServerMessage';
import ToDoList from './redux/ToDoList';
import reducers from './redux/reducers';

const store = createStore(reducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const App = () => {
  const theme = createMuiTheme({
    palette: {
      type: 'light',
    },
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
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
          </div>
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
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
