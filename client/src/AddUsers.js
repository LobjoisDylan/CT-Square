import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class AddUsers extends Component {

    constructor() {
        super();
        this.state = {
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data);

        fetch('http://localhost:8000/add', {
            method: 'POST',
            body: data,
        }).then(res => res.json())
    }

    render() {
        return (
            <div className="container">
                <h1>Ajouter un utilisateur</h1>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" className="form-control" placeholder="nom" name="nom" />
                    <input type="text" className="form-control" placeholder="prenom" name="prenom" />
                    <input type="text" className="form-control" placeholder="telephone" name="telephone" />
                    <input type="text" className="form-control" placeholder="email" name="email" />
                    <input type="text" className="form-control" placeholder="note"name="note" />
                    <div className="row">
                        <div className="col col-md-4 offset-4">
                            <input type="submit" className="mt-3 btn btn-danger form-control" value="Valider l'ajout"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddUsers
