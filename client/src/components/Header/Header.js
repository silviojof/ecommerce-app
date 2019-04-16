import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import Logo_ML from '../../images/Logo_ML.png';
import Logo_ML2x from '../../images/Logo_ML@2x.png';
import ic_Search from '../../images/ic_Search.png';
import ic_Search2x from '../../images/ic_Search@2x.png';

import styles from './Header.module.scss';

export const Header = ({ history }) => {
    const [search, setSearch] = useState('');
    const submit = (e) => {
        e.preventDefault();
        history.push(`/items?search=${search}`)
    }
    return (
        <header className={styles['nav-header']}>
            <div className={styles.container}>
                <a href="/" className={styles.logo}>
                    <img src={Logo_ML} srcSet={`${Logo_ML2x} 2x`} alt="logo" className={styles.image} />
                </a>
                <form onSubmit={submit} className={styles.form}>
                    <div className={styles['form-container']}>
                        <input
                            className={styles.input}
                            aria-label="Search Item"
                            type="text"
                            placeholder="Nunca dejes de buscar"
                            onChange={e => setSearch(e.target.value)}
                            value={search}
                        />
                        <button type="submit" data-testid="submit-button" className={styles.button}>
                            <img src={ic_Search} alt="bar" srcSet={`${ic_Search2x} 2x`} />
                        </button>
                    </div>
                </form>
            </div>
        </header>
    )
};

Header.propTypes = {
    history: PropTypes.object.isRequired,
};

export default withRouter(Header);