import { combineReducers } from 'redux';
import productList from './productList';
import productDetail from './productDetail';

export default combineReducers({ productList, productDetail });
