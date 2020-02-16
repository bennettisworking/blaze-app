import React, {Component} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class List extends Component {

    state = {
      columnDefs: [{
        headerName: "Last Name", field: "last_name"
      }, {
      	headerName: "First Name", field: "first_name"
      }, {
        headerName: "Email", field: "email"
      }, {
        headerName: "Phone", field: "phone"
      }],
      rowData: []
    }

  render() {
	  return (
	  	<div>
			<div
        className="ag-theme-balham"
        style={{
        height: '500px',
        width: '900px' }}>
        <AgGridReact
          columnDefs={this.state.columnDefs} 
          rowData={this.props.customers}>
        </AgGridReact>
	    </div>
	    </div>
		)
	}
}

export default List