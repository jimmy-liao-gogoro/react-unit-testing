import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import axios from 'axios';

import GetServerMessage from './GetServerMessage';

jest.mock('axios');

describe('<GetServerMessage />', () => {
  it('should display empty server message', async () => {
    const { getByText } = render(
      <GetServerMessage />,
    );

    const message = getByText('Server Message:');

    expect(message).toBeInTheDocument();
  });

  it('should get server message after user clicks the button', async () => {
    const { getByText } = render(
      <GetServerMessage />,
    );
    const button = getByText('Get Server Message');
    axios.get.mockResolvedValue({ data: { hello: 'testing' } });

    fireEvent.click(button);

    const message = await waitForElement(() => getByText('Server Message: hello testing'));

    expect(message).toBeInTheDocument();
  });
});
