import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import axios from 'axios';

import GetServerMessage from '../testing-library/GetServerMessage';

const wait = async (amount = 0) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, amount));
  });
};

jest.mock('axios');

describe('<GetServerMessage />', () => {
  it('should display empty server message', async () => {
    const wrapper = mount(<GetServerMessage />);

    const p = wrapper.find('p');

    expect(p).toHaveText('Server Message: ');
  });

  it('should get server message after user clicks the button', async () => {
    const wrapper = mount(<GetServerMessage />);
    const button = wrapper.find('button');
    axios.get.mockResolvedValue({ data: { hello: 'testing' } });

    button.simulate('click');
    await wait();

    const p = wrapper.find('p');
    expect(p).toHaveText('Server Message: hello testing');
  });
});
