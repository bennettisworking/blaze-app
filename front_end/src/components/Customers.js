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
    customers: [],
    currentCustomer: {}
  }

  componentDidMount(){
    this.getCustomers(1);
  }

  getCustomers = (page) => {
    const url = 'http://localhost:5000/api/customer?page=' + page + '&pagelimit=' + this.recordsPerPage;
    fetch(url)
      .then((res) => res.json())
      .then(data => {
        this.setState({
          customers: data,
          currentCustomer: data[0]
        })
      })
    .catch(err => console.log(err))
  }

  setCurrentCustomer = (id) => {
    const customer = this.state.customers.find(cust => cust._id==id);
    if(customer){
      console.log(customer);
      this.setState({

        currentCustomer: customer
      })
    }
  }

  addCustomer = () => {
        const customer = this.state.customer;
        if (customer.last_name && customer.last_name.length > 0) {
            const url = 'http://localhost:5000/api/customer';
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify(customer)
            };
            fetch(url, options)
                .then(response => {
                    console.log(response.status);
                    this.props.getCustomers();
                })
                .catch(err => console.log(err));
        } else {
            console.log('input field required')
        }
  }

  updateCustomer = (id) => {
    const url = 'http://localhost:5000/api/customer' + id;
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
        <Edit getCustomers={this.getCustomers} currentCustomer={this.state.currentCustomer} addCustomer={this.addCustomer}/>
        <List customers={customers} setCurrentCustomer={this.setCurrentCustomer}/>
        <Pagination getCustomers={this.getCustomers} customerCount = {this.state.customers.length} recordsPerPage={this.recordsPerPage}/>
      </div>
    )
  }
}

export default Customers;