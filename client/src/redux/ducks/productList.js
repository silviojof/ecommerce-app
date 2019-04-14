
export const actions = {
    FETCH_ITEMS: 'FETCH_ITEMS',
    FETCH_ITEMS_SUCCESS: 'FETCH_ITEMS_SUCCESS',
    FETCH_ITEMS_ERROR: 'FETCH_ITEMS_ERROR'
};
const initialState = {
    isLoadingItems: false,
    items: [],
    error: false
};

// ActionCreators

export const fetchItems = payload => ({
    type: actions.FETCH_ITEMS,
    payload
});

export const fetchItemsSuccess = payload => ({
    type: actions.FETCH_ITEMS_SUCCESS,
    payload
});

export const fetchItemsError = ({ payload }) => ({
    type: actions.FETCH_ITEMS_ERROR,
    payload
});

const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_ITEMS: {
            return { ...state, isLoadingItems: true };
        }
        case actions.FETCH_ITEMS_SUCCESS: {
            return { ...state, items: action.payload };
        }
        case actions.FETCH_ITEMS_ERROR: {
            return { ...state, error: true };
        }
        default: {
            return state;
        }
    }
};

export default productListReducer;
