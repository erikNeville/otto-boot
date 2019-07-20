import React from 'react'
import Card from 'react-bootstrap/Card'

const ContactSummary = ({ phone }) => {
    return (
        <Card className="contact-summary">
            <Card.Header>{phone.fName} {phone.lName}</Card.Header>
            <Card.Link href={"tel:" + phone.phone} className="card-phone">{phone.phone}</Card.Link>
        </Card>
    )
}

export default ContactSummary