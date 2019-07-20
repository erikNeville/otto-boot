import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const JobSummary = ({ job }) => {

    const [open, setOpen] = useState(false);

    return (
        <Card className="job-summary">
            <Card.Header>
                <Row>
                    <Col sm={5}>
                        {job.project}
                    </Col>
                    <Col sm={7}>
                        <Card.Link href={"https://www.google.com/maps/place/" + job.address} className="card-address">{job.address}</Card.Link>
                    </Col>
                </Row>
            </Card.Header>
            
            <footer>
                <>
                    <Collapse in={open}>
                            <div id="collapse-text">
                                <Card.Body>
                                    <Card.Text>
                                        <Row>
                                            <Col sm>
                                                Job No.<p>{job.job_no}</p>
                                            </Col>
                                            <Col sm>
                                                Permit No.<p>{job.permit}</p>
                                            </Col>
                                            <Col sm>
                                                Contact:<p>{job.phone}</p>
                                            </Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Collapse>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="collapse-text"
                        aria-expanded={open}
                    >
                    More Info
                    </Button>
                    
                </>
            </footer>
        </Card>
    )
}

export default JobSummary