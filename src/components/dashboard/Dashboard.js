import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import JobList from '../jobs/JobList' 
import Searcher from './Searcher'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {

    state = {
        filterText: ''
    }

    filterUpdate(value) {
        this.setState({
            filterText: value
        })
    }

    render() {

        const { jobs } = this.props;

        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={10}>
                        <h4 className="page-header">Job List</h4>
                        <Searcher filterText={this.state.filterText} filterUpdate={this.filterUpdate.bind(this)} />
                        <JobList jobs={jobs} filterText={this.state.filterText} />
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        jobs: state.firestore.ordered.jobs,
        profile: state.firebase.profile,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'jobs', orderBy: ['project', 'asc'] }
    ])
)(Dashboard)