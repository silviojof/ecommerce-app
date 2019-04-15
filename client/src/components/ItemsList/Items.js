import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchItems, clearItems } from '../../redux/ducks/productList';
import ItemDetail from './ItemDetail';
import Breadcrumb from '../Breadcrumb';

import styles from './Items.module.scss';

const Items = ({ location, fetchItems, productList, clearItems }) => {
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const search = searchParams.get('search');
        if (search) {
            fetchItems(search)
        }
        return () => {
            clearItems();
        };
      }, [location.search]);
    
    return (
            <div className={styles.container}>
                <Breadcrumb />
                {
                    productList.length > 0 &&
                    <section className={styles.products}>
                        {
                            productList.map(el => (
                                <ItemDetail key={el.id} data={el} />
                            ))
                        }
                    </section>
                }
            </div>
    )
};

const mapStateToProps = (state) => {
    return {
        productList: state.productList.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchItems: args => dispatch(fetchItems(args)),
      clearItems: () => dispatch(clearItems())
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Items);