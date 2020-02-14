import React, {Component} from 'react';
//import axios from 'axios';
import Edit from './Edit';
import List from './List';

class Customers extends Component {
  state = {
    customers: []
  }

  componentDidMount(){
    this.getCustomers();
  }

  getCount = () => {
    const url = 'http://localhost:5000/api/count';
      fetch(url)
        .then((res) => res.json())
        .then(data => {
          this.setState({
            total_rows: data
          })
      })
      .catch(err => console.log(err))
  }

  getCustomers = () => {
      const url = 'http://localhost:5000/api/customer';
      fetch(url)
        .then((res) => res.json())
        .then(data => {
          this.setState({
            customers: data
          })
      })
      .catch(err => console.log(err))

  }

  deleteCustomer = (id) => {
    fetch('/api/customer/' + id, {
      method: 'DELETE',
    })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  render() {
    let { customers } = this.state;

    return(
      <div>
        <h3>Customers</h3>
        <Edit getCustomers={this.getCustomers}/>
        <List customers={customers} deleteCustomer={this.deleteCustomer}/>
      </div>
    )
  }
}

export default Customers;