import React from 'react';

const List = ({customers, deleteCustomer}) => {
  return (
    <ul>
      {
        customers &&
          customers.length > 0 ?
            (
              customers.map(customer => {
                return (
                  <li key={customer._id} onClick={() => 
                  	deleteCustomer(customers._id)}>
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