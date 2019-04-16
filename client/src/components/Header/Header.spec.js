import React from 'react'
import {render, fireEvent,} from 'react-testing-library'
import { Header } from './Header'

const history = {
    push: jest.fn(),
};

it ('matches snapshot', () => {
    const { container } = render(<Header history={history} />);
    expect(container.firstChild).toMatchSnapshot();
});

it('changes on Type', () => {
    const {getByPlaceholderText} = render(<Header history={history} />);
    const input = getByPlaceholderText('Nunca dejes de buscar');
    fireEvent.change(input, { target: { value: 'search' } });
    expect(getByPlaceholderText('Nunca dejes de buscar').value).toEqual('search');
});

it('submits properlly', () => {
    const spy = jest.fn();
    const history = {
        push: spy,
    };
    const {getByTestId, getByPlaceholderText} = render(<Header history={history} />);
    const button = getByTestId('submit-button');
    const input = getByPlaceholderText('Nunca dejes de buscar');
    fireEvent.change(input, { target: { value: 'search' } });
    fireEvent.click(button);
    expect(spy).toHaveBeenCalledWith('/items?search=search');
});