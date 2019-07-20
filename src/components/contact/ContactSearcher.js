import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'

class ContactSearcher extends Component {
    
    filterUpdate() {
        const val = this.myValue.value
        this.props.filterUpdate(val)
    }

    render() {
        //console.log(this.props)
        return (
            <div>
                <i className="material-icons"><input type="text" ref={ (value) => {this.myValue = value} } placeholder="Search Contact" onChange={this.filterUpdate.bind(this)}></input></i>
            </div>
        )
    }
}

export default ContactSearcher