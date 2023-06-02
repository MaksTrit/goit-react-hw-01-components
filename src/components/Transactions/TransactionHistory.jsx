import PropTypes from 'prop-types';
import { HeadCells, StyledTable } from './TransactionHistory.styled';
import { TransactionsItem } from './TransactionsItem';

export const TransactionHistory = ({ transactions }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <HeadCells>Type</HeadCells>
          <HeadCells>Amount</HeadCells>
          <HeadCells>Currency</HeadCells>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <TransactionsItem transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </StyledTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
