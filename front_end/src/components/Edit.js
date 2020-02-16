import React, { Component } from 'react';
import './Edit.css';
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
        let customer = this.state.customer;
        Object.keys(customer).map((key, index) => {
            //console.log(customer);
            let fieldName = key.replace(/_/g, " ")
            loop.push(<input className='edit-form__input' key={key} type='text' placeholder={fieldName} onChange={this.handleChange.bind(this, key)} value={customer[key]}/>);
        });
        return loop;
    }

    render() {
        let { customer } = this.state;
        return (
            <div className="edit-form">
    			{this.createInputs()}
    			<button className="edit-form__button" onClick={this.props.addCustomer.bind(this, this.state.customer)}>Create new customer</button>
    		</div>
        )
    }
}

export default Edit