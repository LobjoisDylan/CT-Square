import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from './Component/Forms.js';

class AddUsers extends Component {

    render() {
        return (
            <div className="container">
                <h1>Ajouter un utilisateur</h1>
                <Forms />
            </div>
        )
    }
}

export default AddUsers
