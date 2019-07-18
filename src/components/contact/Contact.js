import React, { Component } from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import ContactList from './ContactList'
import Container from 'react-bootstrap/Container'

class Contacts extends Component {
    render() {
        const { phones } = this.props;
        
        return (
            <Container>
                <h4>Contact List</h4>
                <ContactList phones={phones} />
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