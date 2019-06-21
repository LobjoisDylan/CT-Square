import React, { Component } from 'react'
//import './Style/Contacts.css'

class Contacts extends Component {

    constructor() {
        super();
        this.state = {
           contacts: [],
        }
    }

    componentDidMount() {
        fetch("http://localhost:8000/contacts")
        .then(res => res.json())
        .then((result) => {
            this.setState({ contacts: result });
            console.log(this.state.contacts);
        })
    }

    render() {
        return (
            <div className="contacts">
                {this.state.contacts.map(function(contact, index) {
                    return(
                        <div key={index}>
                            {contact.id + " " + contact.nom + " " + contact.prenom + " " + contact.telephone + " " + contact.email + " " + contact.note}
                            <button>Voir le contact</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Contacts
