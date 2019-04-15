import React from 'react';
import ic_shipping from '../../images/ic_shipping.png';
import ic_shipping2x from '../../images/ic_shipping@2x.png';
import Mobile1 from '../../images/mobile1.jpg';

import styles from './Items.module.scss';

const ItemDetail = ({ data }) => {
    return (
        <article className={styles.article}>
            <a href={`/items/${data.id}`} className={styles.articleGrid}>
                <div className={styles.imageContainer}>
                    <img src={Mobile1} alt="product" />
                </div>
                <div className={styles.infoContainer}>
                    <h3>
                        {`${data.price.currency} ${data.price.amount}`}
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

export default ItemDetail;