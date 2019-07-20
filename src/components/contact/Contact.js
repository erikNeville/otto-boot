import React, { Component } from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import ContactSearcher from './ContactSearcher'
import ContactList from './ContactList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Contacts extends Component {

    state = {
        filterText: ''
    }

    filterUpdate(value) {
        this.setState({
            filterText: value
        })
    }

    render() {

        const { phones } = this.props;
        
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col sm={6}>
                        <h4 style={{ color: "white" }}>Contact List</h4>
                        <ContactSearcher filterText={this.state.filterText} filterUpdate={this.filterUpdate.bind(this)} />
                        <ContactList phones={phones} filterText={this.state.filterText} />
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        phones: state.firestore.ordered.phones
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'phones', orderBy: ['lName', 'asc'] }
    ])
)(Contacts)