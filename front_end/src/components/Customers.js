import React, {Component} from 'react';
//import axios from 'axios';
import Edit from './Edit';
import List from './List';
import Pagination from './Pagination';
class Customers extends Component {

  constructor(){
    super();
    this.recordsPerPage = 10;
  }

  state = {
    customers: []
  }

  componentDidMount(){
    this.getCustomers(3);
  }

  getCustomers = (page) => {
      const url = 'http://localhost:5000/api/customer?page=' + page + '&pagelimit=' + this.recordsPerPage;
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
        <Pagination getCustomers={this.getCustomers} customerCount = {this.state.customers.length} recordsPerPage={this.recordsPerPage}/>
      </div>
    )
  }
}

export default Customers;