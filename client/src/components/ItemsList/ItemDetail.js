import React from 'react';
import PropTypes from 'prop-types';
import ic_shipping from '../../images/ic_shipping.png';
import ic_shipping2x from '../../images/ic_shipping@2x.png';

import styles from './Items.module.scss';

const parseCurrency = curr => {
    let symbol;
    switch(curr) {
        case 'ARS':
        case 'USD':
            symbol = '$';
            break;
        case 'BRL':
            symbol = 'R$';
            break;
        default:
            symbol = curr;
    }
    return symbol;
}

const ItemDetail = ({ data }) => {
    return (
        <article className={styles.article}>
            <a href={`/items/${data.id}`} className={styles.articleGrid}>
                <div className={styles.imageContainer}>
                    <img src={data.picture} alt="product" />
                </div>
                <div className={styles.infoContainer}>
                    <h3>
                        {`${parseCurrency(data.price.currency)} ${data.price.amount.toLocaleString('es-AR')}`}
                        {
                            data.free_shipping &&
                            <img src={ic_shipping} srcSet={`${ic_shipping2x} 2x`} alt="shipping status" />
                        }
                    </h3>
                    <p>{data.title}</p>
                </div>
                <div className={styles.locationContainer}>
                    <h6>{data.location}</h6>
                </div>
            </a>
            <hr />
        </article>
    )
};

ItemDetail.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        price: PropTypes.shape({
            currency: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
        }).isRequired,
        free_shipping: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
    }).isRequired,
};

export default ItemDetail;