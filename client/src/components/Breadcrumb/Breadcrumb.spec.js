import React from 'react';
import {render} from 'react-testing-library';
import { Breadcrumb } from './Breadcrumb';

it ('matches snapshot', () => {
  const { container } = render(<Breadcrumb categories={['first', 'second']} />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders two categories', () => {
  const {getByText} = render(<Breadcrumb categories={['first', 'second']} />);
  expect(getByText('first')).toBeInTheDocument();
  expect(getByText('first')).toBeInTheDocument();
});

it('renders last one with "last" class', () => {
    const {queryAllByText} = render(<Breadcrumb categories={['first', 'second']} />);
    expect(queryAllByText('>').length).toBe(1);
});