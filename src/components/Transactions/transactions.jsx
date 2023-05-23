import React from 'react';

import {
  TableSection,
  TableCaption,
  TableHead,
  TableSubHead,
  TableDataFirst,
  TableDataSecond,
  TableDataThird,
} from './transactions.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TableSection>
      <TableCaption>Transaction History</TableCaption>
      <TableHead>
        <tr>
          <TableSubHead>Type</TableSubHead>
          <TableSubHead>Amount</TableSubHead>
          <TableSubHead>Currency</TableSubHead>
        </tr>
      </TableHead>
      <tbody>
        {items.map(transaction => (
          <tr key={transaction.id}>
            <TableDataFirst>{transaction.type}</TableDataFirst>
            <TableDataSecond>{transaction.amount}</TableDataSecond>
            <TableDataThird>{transaction.currency}</TableDataThird>
          </tr>
        ))}
      </tbody>
    </TableSection>
  );
};

export default TransactionHistory;
