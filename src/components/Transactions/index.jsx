import PropTypes from 'prop-types';
import { TransactionTable, TransactionTableWrapper } from './index.styled';

export const Transactions = ({transactions}) => {
   return (
      <TransactionTableWrapper>
         <TransactionTable>
            <>
            <thead>
               <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Currency</th>
               </tr>
            </thead>
            <tbody>
               {transactions.map(el=>{
                  return <tr key={el.id}>
                  <td>{el.type}</td>
                  <td>{el.amount}</td>
                  <td>{el.currency}</td>
               </tr>;
               })}
               

            </tbody></>
         </TransactionTable>
      </TransactionTableWrapper>
   );
}

Transactions.prototype = {
   transactions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
   })).isRequired,
}