import React, { Component } from 'react'

class Profil extends Component {

    constructor() {
        super();
        this.state = {
            profil: [],
            loading: false,
            //forms: false
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
    
    /*handleClick = () => {
        console.log("test");
    }*/
    
    render() {
        return (
            <div className="container">
                {this.state.loading === false ? "Chargement du contenu..." : this.state.profil.id + " " + this.state.profil.nom + " " + this.state.profil.prenom + " " + this.state.profil.telephone + " " + this.state.profil.email + " " + this.state.profil.note}
                {/*<input type="submit" onClick={(e) => this.handleClick(e)} /> */}
                <h1>Changer l'utilisateur</h1>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" className="form-control" placeholder={this.state.profil.nom} name="nom" />
                    <input type="text" className="form-control" placeholder={this.state.profil.prenom} name="prenom" />
                    <input type="text" className="form-control" placeholder={this.state.profil.telephone} name="telephone" />
                    <input type="text" className="form-control" placeholder={this.state.profil.email} name="email" />
                    <input type="text" className="form-control" placeholder={this.state.profil.note} name="note" />
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

export default Profil