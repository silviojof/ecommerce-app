import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDetail, clearDetail } from '../../redux/ducks/productDetail';
import Breadcrumb from '../Breadcrumb';
import Mobile1 from '../../images/mobile1.jpg';

import styles from './ItemDetail.module.scss';

const ItemDetail = ({ location, match, fetchDetails, details, clearDetail }) => {
    useEffect(() => {
        if (match.params.id) {
            fetchDetails(match.params.id)
        }
        return () => {
            clearDetail();
        };
      }, [location.search, match.params.id]);
    return (
            <div className={styles.container}>
                <Breadcrumb />
                {
                    details !== null &&
                    <section className={styles.detail}>
                        <img
                            className={styles.image}
                            src={Mobile1} alt="product"
                        />
                        <div>
                            <span className={styles.caption}>{`${details.condition} - ${details.sold_quantity} vendidos`}</span>
                            <h5 className={styles.title}>{details.title}</h5>
                            <h3 className={styles.value}>
                                {`${details.price.currency} ${details.price.amount}`}<span>${details.price.decimals}</span>
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

const mapStateToProps = (state) => {
    return {
        details: state.productDetail.details
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