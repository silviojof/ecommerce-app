import React from 'react';
import {render} from 'react-testing-library';
import { renderWithProvider, mockStore } from '../../testUtils';
import { ItemDetail } from './ItemDetail';

const defaultProps = {
    location: {},
    match: {
        params: {}
    },
    fetchDetails: jest.fn(),
    details: {
        picture: '',
        condition: 'new',
        sold_quantity: 1,
        price: {
            currency: 'ARS',
            amount: 23,
            decimals: 12,
        },
        description: 'description',
    },
    clearDetail: jest.fn(),
    isLoading: false,
};

const initialStateStore = mockStore({ productList: { categories: ['first', 'second']} });

it ('matches snapshot', () => {
    const { container } = renderWithProvider({
        store: initialStateStore,
        component: (
            <ItemDetail {...defaultProps} />
        )
    });
    expect(container.firstChild).toMatchSnapshot();
});

it('isLoading', () => {
    const newProps = {
        ...defaultProps,
        isLoading: true
    };
    const {getByTestId} = render(<ItemDetail {...newProps} />);
    expect(getByTestId('loader')).toBeInTheDocument();
});

it('load Data', () => {
    const newProps = {
        ...defaultProps
    };
    const { getByTestId } = renderWithProvider({
        store: initialStateStore,
        component: (
            <ItemDetail {...newProps} />
        )
    });
    expect(getByTestId('content')).toBeInTheDocument();
});