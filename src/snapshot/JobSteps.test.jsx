import React from 'react';
import { create } from 'react-test-renderer';

import JobSteps from './JobSteps';

describe('<JobSteps/>', () => {
  it('match snapshot', () => {
    const tree = create(<JobSteps step={1} total={3} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
