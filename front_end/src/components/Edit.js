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

    /*componentDidUpdate(nextProps) {
 		const { show } = this.props;	
 		if (nextProps.show !== show) {
  			if (show) {
   				getMoreData().then(resp => this.setState({ data: resp.data }))
  			}
 		}
	}*/

	handleChange = (name, e) => {
        var change = this.state.customer;
        change[name] = e.target.value;
        this.setState(change);
    }

    createInputs = () => {
        let loop = [];

        let customer = this.props.currentCustomer;
              console.log('moo');
        console.log(customer);
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
    			<button onClick={this.props.addCustomer}>meow</button>
    			{this.createInputs()}
    		</div>
        )
    }
}

export default Edit