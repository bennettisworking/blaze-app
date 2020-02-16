import React, {Component} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './List.css';

class List extends Component {

    state = {
      columnDefs: [{
        headerName: "Last Name", field: "last_name", editable: true, flex: 1
      }, {
      	headerName: "First Name", field: "first_name", editable: true, flex: 1
      }, {
        headerName: "Email", field: "email", editable: true, flex: 1
      }, {
        headerName: "Phone", field: "phone", editable: true, flex: 1
      }],
      rowData: []
    }

  render() {
	  return (
	  	<div className="ag-grid__container ag-theme-balham">
		<AgGridReact
          columnDefs={this.state.columnDefs} 
          rowData={this.props.customers}>
        </AgGridReact>
        <button className="list-view__button" onClick={this.props.updateCustomers}>Save changes</button>
	    </div>
		)
	}
}

export default List