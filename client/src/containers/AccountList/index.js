import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

const AccountList = ({ accounts, onRefreshClick }) => {
  console.log(accounts);

  return (
    <>
      <h3>Products</h3>
      <button onClick={() => onRefreshClick()}>Refresh</button>
      <ul>
        {accounts.accountsReducer.accounts.map((account, index) => {
          return <li>{account.name}</li>;
        })}
      </ul>
    </>
  );
};

// AccountList.propTypes = {
//   accounts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

const mapStateToProps = (state) => {
  return {
    accounts: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRefreshClick: () => {
      console.log('Dispatching getAccounts');

      dispatch(actions.getAccounts())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountList);
