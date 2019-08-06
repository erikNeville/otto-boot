import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class DashHeader extends Component {

    render() {
        console.log(this.props)
        return (
                <h4 className="page-header">Job List</h4>
        )
    } 
}

export default DashHeader