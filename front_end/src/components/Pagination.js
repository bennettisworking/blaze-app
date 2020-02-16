import React, { Component } from 'react';
import './Pagination.css';
//import axios from 'axios';

class Pagination extends Component {
    state = {
        currentPage: 1,
        totalCustomers: 0
    }

    componentDidMount = () => {
        this.getCount();
    }

    getCount = () => {
      const url = "http://localhost:5000/api/count";
      fetch(url)
        .then((res) => res.json())
        .then(data => {
          this.setState({
            totalCustomers: data
          })
      })
      .catch(err => console.log(err))
    }

    setPage(page) {
        this.setState({
            currentPage: page
        });
        this.props.getCustomers(page);
    }

    render() {
        let links = [];
        const totalPages = Math.ceil(this.state.totalCustomers/this.props.recordsPerPage);
        for(let a = 0; a < totalPages; a++) {
            links.push(<div key={a} className={"pagination__link " + (this.state.currentPage==(a + 1)  ? "active" : "")} onClick={this.setPage.bind(this, (a + 1))}>{a + 1}</div>)
        }
        return (
            <div>
    	{links}
    	</div>
        )
    }
}

export default Pagination