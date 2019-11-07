import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import JobSteps from './snapshot/JobSteps';
import GetServerMessage from './testing-library/GetServerMessage';

function App() {
  return (
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
      </Switch>
    </Router>
  );
}

export default App;
