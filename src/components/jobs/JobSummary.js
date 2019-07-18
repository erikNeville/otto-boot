import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const JobSummary = ({ job }) => {
    console.log(job)
    return (
        <Card>
            <Card.Header>{job.project}</Card.Header>
            <Card.Link href={"https://www.google.com/maps/place/" + job.address}>{job.address}</Card.Link>
        </Card>
    )
}

export default JobSummary