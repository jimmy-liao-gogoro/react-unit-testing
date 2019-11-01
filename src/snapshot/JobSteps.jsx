import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.css';

const JobSteps = ({ step, total }) => {
  if (step === null) {
    return null;
  }

  const stepItems = [];
  for (let i = 1; i <= total; i += 1) {
    const circleClass = classnames('circle', {
      'circle-active': step === i,
    });
    stepItems.push(
      <span className="step" key={i}>
        {i !== total ? <span className="line" /> : null}
        <span className={circleClass}>
          {i}
        </span>
      </span>,
    );
  }

  return <span className="container">{stepItems}</span>;
};

JobSteps.propTypes = {
  step: PropTypes.number,
  total: PropTypes.number.isRequired,
};

JobSteps.defaultProps = {
  step: null,
};

export default JobSteps;
