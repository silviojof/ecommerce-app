import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchItems, clearItems } from '../../redux/ducks/productList';
import ItemDetail from './ItemDetail';
import Breadcrumb from '../Breadcrumb';
import Loader from '../Loader';

import styles from './Items.module.scss';

const Items = ({ location, fetchItems, productList, clearItems, isLoading }) => {
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

    if (isLoading) {
        return (
            <div className={styles.loader}>
                <Loader />
            </div>
        )
    }

    return (
            <div className={styles.container}>
                <Breadcrumb />
                {
                    productList.length > 0 ?
                    <section className={styles.products}>
                        {
                            productList.map(el => (
                                <ItemDetail key={el.id} data={el} />
                            ))
                        }
                    </section>
                    :
                    <div>
                        No hay elementos dentro de este criterio de búsqueda.
                    </div>
                }
            </div>
    )
};

Items.propTypes = {
    location: PropTypes.object.isRequired,
    fetchItems: PropTypes.func.isRequired,
    productList: PropTypes.array,
    clearItems: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

Items.defaultProps = {
    productList: []
};

const mapStateToProps = (state) => {
    return {
        productList: state.productList.items,
        isLoading: state.productList.isLoadingItems
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