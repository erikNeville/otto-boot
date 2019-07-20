import React from 'react'
import ContactSummary from './ContactSummary'

const ContactList = (props) => {

    const { phones, filterText } = props;

    return (
        <div>
            { phones && phones
                .filter(phone => {
                    return phone.fName.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
                })
                .map(phone => {
                    return (
                        <ContactSummary phone={phone} key={phone.id} />
                    )
                })}
        </div>
    )
}

export default ContactList