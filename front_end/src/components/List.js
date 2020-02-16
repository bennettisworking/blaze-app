import React from 'react';

const List = ({customers, setCurrentCustomer}) => {
  return (
    <ul>
      {
        customers &&
          customers.length > 0 ?
            (
              customers.map(customer => {
                return (
                  <li key={customer._id} onClick={() => 
                  	setCurrentCustomer(customer._id)}>
                  	{customer.first_name + ' ' + customer.last_name}<div className="pipe">|</div>
                  	{customer.email}
                  	</li>
                )
              })
            )
            :
            (
              <li>No customers in the database.</li>
            )
      }
    </ul>
  )
}

export default List