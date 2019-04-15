
export const actions = {
    FETCH_DETAIL: 'FETCH_DETAIL',
    FETCH_DETAIL_SUCCESS: 'FETCH_DETAIL_SUCCESS',
    FETCH_DETAIL_ERROR: 'FETCH_DETAIL_ERROR',
    CLEAR_DETAIL: 'CLEAR_DETAIL',
};
const initialState = {
    isLoadingDetails: false,
    details: null,
    error: false
};

// ActionCreators

export const fetchDetail = payload => ({
    type: actions.FETCH_DETAIL,
    payload
});

export const fetchDetailSuccess = payload => ({
    type: actions.FETCH_DETAIL_SUCCESS,
    payload
});

export const fetchDetailError = ({ payload }) => ({
    type: actions.FETCH_DETAIL_ERROR,
    payload
});

export const clearDetail = () => ({
    type: actions.CLEAR_DETAIL
});

const productDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_DETAIL: {
            return { ...state, isLoadingDetails: true };
        }
        case actions.FETCH_DETAIL_SUCCESS: {
            return { 
                ...state, 
                isLoadingDetails: false,
                details: action.payload.item,
            };
        }
        case actions.FETCH_DETAIL_ERROR: {
            return { ...state, isLoadingDetails: false, error: true };
        }
        case actions.CLEAR_DETAIL: {
            return { 
                ...state, 
                isLoadingDetails: false,
                details: null,
            };
        }
        default: {
            return state;
        }
    }
};

export default productDetailReducer;
