import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Contacts.css'
import Utilisateur from '../Picture/utilisateur.jpg'

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
                <h1 className="text-center mt-5">Affichage de tout les contacts</h1>
                <div className="row mt-5">
                    {this.state.contacts.map(function(contact, index) {
                    return(
                        <div key={index} className="col-lg-4 ecart text-center">
                            <Link to={`/profil/${contact.id}`}><img src={Utilisateur} class="picture-reducer" title="Afficher le profil" alt="logo"/></Link><br />
                            {contact.nom + " " + contact.prenom}<br />
                        </div>
                    )})}
                </div>
            </div>
        )
    }
}

export default Contacts
