import React from 'react';
import { create } from 'react-test-renderer';

import JobSteps from './JobSteps';

describe('<JobSteps/>', () => {
  it('should render nothing if step is null', () => {
    const tree = create(<JobSteps step={null} total={3} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should highlight step 1 if job is in step 1', () => {
    const tree = create(<JobSteps step={1} total={3} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
