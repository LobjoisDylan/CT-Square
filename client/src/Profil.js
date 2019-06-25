import React, { Component } from 'react'
import Utilisateur from './Picture/utilisateur.jpg'
import './Style/Profil.css'

class Profil extends Component {

    constructor() {
        super();
        this.state = {
            profil: [],
            loading: false
        }
    }
    
    componentWillMount = () => {
        var id = document.location.href.split("/")
        fetch(`http://localhost:8000/profil/${id[4]}`)
        .then(res => res.json())
        .then((result) => {
            this.setState({ profil: result, loading: true });
        })
    }

    handleSubmit(event) {
        var id = document.location.href.split("/")
        event.preventDefault();
        const data = new FormData(event.target);
        
        fetch(`http://localhost:8000/update/${id[4]}`, {
          method: 'POST',
          body: data,
        })
    }
    
    render() {
        return (
            <div className="container">
                <div className="donnees">
                    <img src={Utilisateur} alt="cool" className="reduce-picture" />
                    <ul>
                        <li><b>Nom</b> : {this.state.loading === false ? "Chargement du contenu..." : this.state.profil.nom}</li>
                        <li><b>Penom : </b>{this.state.loading === false ? "Chargement du contenu..." : this.state.profil.prenom}</li>
                        <li><b>Telephone : </b>{this.state.loading === false ? "Chargement du contenu..." : this.state.profil.telephone}</li>
                        <li><b>Email : </b>{this.state.loading === false ? "Chargement du contenu..." : this.state.profil.email}</li>
                        <li><b>Note : </b>{this.state.loading === false ? "Chargement du contenu..." : this.state.profil.note}</li>
                    </ul>
                </div>

                <h1 className="text-center mt-4 mb-4">Modifier l'utilisateur</h1>
                <form onSubmit={this.handleSubmit} >
                    <div className="row">
                        <div className="col-lg-6">
                            <input type="text" className="form-control" placeholder={this.state.profil.nom} name="nom" />
                        </div>
                        <div className="col-lg-6">
                            <input type="text" className="form-control" placeholder={this.state.profil.prenom} name="prenom" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <input type="text" className="form-control" placeholder={this.state.profil.telephone} name="telephone" />
                        </div>
                        <div className="col-lg-6">
                            <input type="text" className="form-control" placeholder={this.state.profil.email} name="email" />
                        </div>
                    </div>
                    <input type="text" className="form-control" placeholder={this.state.profil.note} name="note" />
                    <div className="row">
                        <div className="col col-md-4 offset-4">
                            <input type="submit" className="mt-5 btn btn-dark form-control" value="Modifier l'utilisateur"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Profil