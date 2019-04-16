import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './Breadcrumb.module.scss';

export const Breadcrumb = ({ categories }) => {
    return (
        <div className={styles.breadcrumb}>
            {
                categories.map((el, index) => {
                    const isLast = index !== categories.length - 1;
                    return (
                        <div className={styles.breadcrumbItem} key={el}>
                            <span className={`${isLast ? '' : styles.last}`}>{el}</span>
                            {
                                isLast &&
                                <span className={styles.breadcrumbArrow}>></span>
                            }
                        </div>
                )})
            }
        </div>
    )
};

Breadcrumb.propTypes = {
    categories: PropTypes.arrayOf((PropTypes.string)).isRequired,
};

const mapStateToProps = (state) => {
    return {
        categories: state.productList.categories
    }
}

export default connect(
    mapStateToProps,
)(Breadcrumb);