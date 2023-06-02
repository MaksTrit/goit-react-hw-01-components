import PropTypes from 'prop-types';
import { BodyCells, RowLines } from './TransactionHistory.styled';

export const TransactionsItem = ({
  transaction: { type, amount, currency },
}) => {
  return (
    <RowLines>
      <BodyCells>{type}</BodyCells>
      <BodyCells>{amount}</BodyCells>
      <BodyCells>{currency}</BodyCells>
    </RowLines>
  );
};

TransactionsItem.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
