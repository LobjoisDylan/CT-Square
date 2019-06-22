import React, { Component } from 'react'

class Affichage extends Component {

    constructor() {
        super();
        this.state = {
           affichage: [],
           loading: false
        }
    }
    
    componentDidMount = () => {
        var id = document.location.href.split("/")
        fetch(`http://localhost:8000/affichage/${id[4]}`)
        .then(res => res.json())
        .then((result) => {
            this.setState({ affichage: result, loading: true });
            console.log(this.state.affichage);
        })
    }

    render() {
        return (
            <div className="affichage">
                {this.state.loading === false ? "Chargement du contenu..." : this.state.affichage.id + " " + this.state.affichage.nom + " " + this.state.affichage.prenom + " " + this.state.affichage.telephone + " " + this.state.affichage.email + " " + this.state.affichage.note}
            </div>
        )
    }
}

export default Affichage