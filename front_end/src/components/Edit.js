import React, { Component } from 'react';
//import axios from 'axios';

class Edit extends Component {
    state = {
        customer: {
            last_name: "",
            first_name: "",
            email: "",
            phone: ""
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

    handleChange = (name, e) => {
        var change = this.state.customer;
        change[name] = e.target.value;
        this.setState(change);
    }

    createInputs = () => {
        let loop = [];
        let customer = this.state.customer;
        Object.keys(customer).map((key, index) => {
            //console.log(customer);
            loop.push(<input key={key} type='text' onChange={this.handleChange.bind(this, key)} value={customer[key]}/>);
        });
        return loop;
    }

    render() {
        let { customer } = this.state;
        return (
            <div>
    	<button onClick={this.addCustomer}>meow</button>
    	{this.createInputs()}
    	</div>
        )
    }
}

export default Edit