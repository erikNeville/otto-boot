import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const JobSummary = ({ job }) => {
    console.log(job);
    return (
        <Card className="job-summary">
            <Card.Header>{job.project}</Card.Header>
            <Card.Body>
                    <ListGroup className="list-group-flush">
                        <Row>
                            <ListGroupItem>
                                <Col sm>
                                    <Card.Text>Job No. {job.job_no}</Card.Text>
                                </Col>
                            </ListGroupItem>
                            <ListGroupItem>                    
                                <Col sm>
                                    <Card.Text>Permit No. {job.permit}</Card.Text>
                                </Col>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Col sm>
                                    <Card.Text>Contact: {job.phone}</Card.Text>
                                </Col>
                            </ListGroupItem>
                        </Row>
                    </ListGroup>
            </Card.Body>
            <hr/>
            <Card.Link href={"https://www.google.com/maps/place/" + job.address} className="card-address">{job.address}</Card.Link>
        </Card>
    )
}

export default JobSummary