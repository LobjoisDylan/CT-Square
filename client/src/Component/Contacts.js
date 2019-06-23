import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Contacts.css'

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
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    {this.state.contacts.map(function(contact, index) {
                    return(
                        <div key={index} className="col-lg-4 ecart">  
                            {contact.nom + " " + contact.prenom}
                            <Link to={`/profil/${contact.id}`}>Voir le contact</Link>
                        </div>
                    )})}
                </div>
            </div>
        )
    }
}

export default Contacts
