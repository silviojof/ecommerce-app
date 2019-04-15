
export const actions = {
    FETCH_ITEMS: 'FETCH_ITEMS',
    FETCH_ITEMS_SUCCESS: 'FETCH_ITEMS_SUCCESS',
    FETCH_ITEMS_ERROR: 'FETCH_ITEMS_ERROR',
    SET_CATEGORIES: 'SET_CATEGORIES',
    CLEAR_ITEMS: 'CLEAR_ITEMS'
};
const initialState = {
    isLoadingItems: false,
    items: [],
    categories: [],
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

export const setCategories = payload => ({
    type: actions.SET_CATEGORIES,
    payload
});

export const clearItems = () => ({
    type: actions.CLEAR_ITEMS
});

const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_ITEMS: {
            return { ...state, isLoadingItems: true };
        }
        case actions.FETCH_ITEMS_SUCCESS: {
            return { 
                ...state,
                isLoadingItems: false,
                items: action.payload.items,
                categories: action.payload.categories,
            };
        }
        case actions.FETCH_ITEMS_ERROR: {
            return { ...state, isLoadingItems: false, error: true };
        }
        case actions.SET_CATEGORIES: {
            return { ...state, categories: action.payload };
        }
        case actions.CLEAR_ITEMS: {
            return { 
                ...state,
                isLoadingItems: false,
                items: [],
                categories: [],
            };
        }
        default: {
            return state;
        }
    }
};

export default productListReducer;
