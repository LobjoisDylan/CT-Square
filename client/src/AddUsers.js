import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from './Component/Forms.js';
import './Style/AddUsers.css'

class AddUsers extends Component {

    render() {
        return (
            <div className="container middle">
                <h1 className="text-center">Ajouter un utilisateur</h1>
                <Forms />
            </div>
        )
    }
}

export default AddUsers
