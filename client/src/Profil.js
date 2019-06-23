import React, { Component } from 'react'

class Profil extends Component {

    constructor() {
        super();
        this.state = {
           profil: [],
           loading: false
        }
    }
    
    componentDidMount = () => {
        var id = document.location.href.split("/")
        fetch(`http://localhost:8000/profil/${id[4]}`)
        .then(res => res.json())
        .then((result) => {
            this.setState({ profil: result, loading: true });
        })
    }

    render() {
        return (
            <div className="profil">
                {this.state.loading === false ? "Chargement du contenu..." : this.state.profil.id + " " + this.state.profil.nom + " " + this.state.profil.prenom + " " + this.state.profil.telephone + " " + this.state.profil.email + " " + this.state.profil.note}
            </div>
        )
    }
}

export default Profil