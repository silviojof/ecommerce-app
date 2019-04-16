import React from 'react';
import {render} from 'react-testing-library';
import { renderWithProvider, mockStore } from '../../testUtils';
import { ItemsList } from './ItemsList';

const defaultProps = {
    location: {},
    match: {
        params: {}
    },
    fetchItems: jest.fn(),
    productList: [{
        id: 'MLA23',
        title: 'title',
        location: 'Buenos Aires',
        picture: '',
        condition: 'new',
        free_shipping: true,
        price: {
            currency: 'ARS',
            amount: 23,
            decimals: 12,
        },
    }],
    clearItems: jest.fn(),
    isLoading: false,
};

const initialStateStore = mockStore({ productList: { categories: ['first', 'second']} });

it ('matches snapshot', () => {
    const { container } = renderWithProvider({
        store: initialStateStore,
        component: (
            <ItemsList {...defaultProps} />
        )
    });
    expect(container.firstChild).toMatchSnapshot();
});

it('isLoading', () => {
    const newProps = {
        ...defaultProps,
        isLoading: true
    };
    const {getByTestId} = render(<ItemsList {...newProps} />);
    expect(getByTestId('loader')).toBeInTheDocument();
});

it('no Products', () => {
    const newProps = {
        ...defaultProps,
        productList: [],
    };
    const { queryByText } = renderWithProvider({
        store: initialStateStore,
        component: (
            <ItemsList {...newProps} />
        )
    });
    expect(queryByText('No hay elementos dentro de este criterio de búsqueda.')).toBeInTheDocument();
});

it('load Products', () => {
    const newProps = {
        ...defaultProps
    };
    const { getByTestId } = renderWithProvider({
        store: initialStateStore,
        component: (
            <ItemsList {...newProps} />
        )
    });
    expect(getByTestId('articles')).toBeInTheDocument();
});