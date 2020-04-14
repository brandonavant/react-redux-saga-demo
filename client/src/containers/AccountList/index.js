import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

const AccountList = ({ state, onRefreshClick }) => {
  return (
    <>
      <h3>Products</h3>
      <button onClick={() => onRefreshClick()}>Refresh</button>
      <ul>
        {state.accounts.payload.map((account, index) => {
          return <li key={account.id}>{account.name}</li>;
        })}
      </ul>
    </>
  );
};

AccountList.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

const mapStateToProps = (state, ownProps) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRefreshClick: () => {
      dispatch(actions.getAccounts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountList);
