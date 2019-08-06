import React, { Component, useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import JobList from '../jobs/JobList' 
import Searcher from './Searcher'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import DashHeader from './DashHeader'

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
                <Container className="job-list-header">
                    <Row>
                        <Col></Col>
                        <Col sm={8} xs={8} lg={6}>
                                <h4 className="page-header">Job List</h4>
                                <Searcher filterText={this.state.filterText} filterUpdate={this.filterUpdate.bind(this)} />
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
                <Row>
                    <Col></Col>
                    <Col sm={8} xs={8} lg={6}>
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
    console.log(state.firestore.ordered.jobs);
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