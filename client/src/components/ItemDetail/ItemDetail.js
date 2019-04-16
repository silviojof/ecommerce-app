import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDetail, clearDetail } from '../../redux/ducks/productDetail';
import Breadcrumb from '../Breadcrumb';
import Loader from '../Loader';

import styles from './ItemDetail.module.scss';

const parseCondition = status => {
    let condition;
    switch(status) {
        case 'new':
        case 'nuevo':
            condition = 'Nuevo';
            break;
        case 'used':
            condition = 'Usado';
            break;
        default:
            condition = status;
    }
    return condition;
}

export const ItemDetail = ({ location, match, fetchDetails, details, clearDetail, isLoading }) => {
    useEffect(() => {
        if (match.params.id) {
            fetchDetails(match.params.id)
        }
        return () => {
            clearDetail();
        };
      }, [location.search, match.params.id]);

    if (isLoading) {
        return (
            <div data-testid="loader" className={styles.loader}>
                <Loader />
            </div>
        )
    }
    
    return (
            <div className={styles.container}>
                <Breadcrumb />
                {
                    details !== null &&
                    <section className={styles.detail} data-testid="content">
                        <img
                            className={styles.image}
                            src={details.picture} alt="product"
                        />
                        <div>
                            <span
                                className={styles.caption}
                            >
                                {`${parseCondition(details.condition)} - ${details.sold_quantity} vendidos`}
                            </span>
                            <h5 className={styles.title}>{details.title}</h5>
                            <h3 className={styles.value}>
                                {`${details.price.currency} ${details.price.amount.toLocaleString('es-AR')}`}
                                <span>{details.price.decimals || '00'}</span>
                            </h3>
                            <button className={styles.button}>Comprar</button>
                        </div>
                        <div className={styles.description}>
                            <h4>Descripción del produto</h4>
                            <p>{details.description}</p>
                        </div>
                    </section>
                }
            </div>
    )
};

ItemDetail.propTypes = {
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    fetchDetails: PropTypes.func.isRequired,
    details: PropTypes.shape({
        picture: PropTypes.string.isRequired,
        condition: PropTypes.string.isRequired,
        sold_quantity: PropTypes.number.isRequired,
        price: PropTypes.shape({
            currency: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            decimals: PropTypes.number.isRequired,
        }),
        description: PropTypes.string.isRequired,
    }),
    clearDetail: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

ItemDetail.defaultProps = {
    details: {
        picture: '',
        condition: '',
        sold_quantity: 0,
        price: {
            currency: '',
            amount: 0,
            decimals: 0,
        },
        description: '',
    },
};

const mapStateToProps = (state) => {
    return {
        details: state.productDetail.details,
        isLoading: state.productDetail.isLoadingDetails
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchDetails: args => dispatch(fetchDetail(args)),
      clearDetail: () => dispatch(clearDetail()),
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDetail);