import React from 'react'
import Card from 'react-bootstrap/Card'

const ContactSummary = ({ phone }) => {
    return (
        <Card>
            <span>{phone.lName} {phone.fName}</span>
            <p><a href={"tel:" + phone.phone}>{phone.phone}</a></p>
        </Card>
    )
}

export default ContactSummary