import s from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
   return (
    <table className={s.table}>
        <thead>
            <tr className={s.title}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody className={s.table_list}>
            {items.map(item => (
                <tr key={item.id}>
                    <td className={s.type}>{item.type}</td>
                    <td className={s.amount}>{item.amount}</td>
                    <td className={s.currency}>{item.currency}</td>
                </tr>))}
        </tbody>
    </table>
   )
   
};


export default TransactionHistory