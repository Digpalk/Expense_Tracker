import React, {useContext} from 'react'
import Transaction from './Transaction';

import { GlobalContext, GlobalProvider } from '../context/GlobalState'


const TransactionList = () => {

    const {transactions} = useContext(GlobalContext);

    // console.log(transactions);
    return (
        <>
            <h3>History</h3>
            <ul className="list">
               {transactions.map((transaction)=>(
                <Transaction transaction={transaction} key={transaction.id}/>
               ))}
              
            </ul>
        </>
    )
}

export default TransactionList
