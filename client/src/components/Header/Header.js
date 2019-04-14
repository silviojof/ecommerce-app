import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../redux/ducks/productList';

const Header = ({ fetchItems }) => {
    const [search, setSearch] = useState('');
    const submit = (e) => {
        e.preventDefault();
        console.log(search)
        fetchItems(search);
    }
    return (
        <header>
            <form onSubmit={submit}>
                <input
                    type="text"
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                />
                <button type="submit">Enviar</button>
            </form>
        </header>
    )
};

const mapStateToProps = (state) => {
    return {
        productList: state.productList
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchItems: args => dispatch(fetchItems(args)),
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);