import React from "react";
import { Carteproduit } from "./Carte";
import { Entete } from "./Entetes";
import { images } from "../App";
import { SectionAccueil2 } from "./SectionAccueil";
import axios from "axios";


export class AjouterProduit extends React.Component{
constructor(){
  super();
  this.onChangeSrc = this.onChangeSrc.bind(this);
  this.onChangeMontant = this.onChangeMontant.bind(this);
  this.onChangeProfil = this.onChangeProfil.bind(this);
  this.onChangeDescription = this.onChangeDescription.bind(this);
  this.onChangeTitre = this.onChangeTitre.bind(this);

  this.onSubmit = this.onSubmit.bind(this);

  this.state={
    src:'',
    auteur:'woo',
    montant:0,
    profil:'',
    description:'',
    titre:'',
  }
}
onChangeSrc(e) {
  this.setState({
    src: e.target.value
  });
}

onChangeMontant(e) {
  this.setState({
    montant: e.target.value
  });
}
onChangeProfil(e) {
  this.setState({
    profil: e.target.value
  });
}

onChangeDescription(e) {
  this.setState({
    description: e.target.value
  });
}
onChangeTitre(e) {
  this.setState({
    titre: e.target.value
  });
}
onSubmit(e) {
  e.preventDefault();
  const produit = {
    src: this.state.src,
    auteur:'woo',
    montant: this.state.montant,
    profil: this.state.profil,
    description: this.state.description,
    titre: this.state.titre,

  };
console.log(produit);
window.location = '/Ajouter';
axios.post(process.env.REACT_APP_BACKEND_URL+'/Produits/add', produit)
  .then(res => console.log(res.data));

}



    render(){
        return( <div>
        
        <Entete titre={'Ajouter Un Produit'} />
        <div className="row ajouterproduit">   
        <form className="card "    onSubmit={this.onSubmit}>
  <div className="form-group">
    <label for="exampleInputtitre1">Titre</label>
    <input required type="text" maxLength="18" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrer titre" value={this.state.titre} onChange={this.onChangeTitre}/>
  </div>
  <div className="form-group">
    <label for="exampleInputimg"> Lien Image</label>
    <input required type="text" className="form-control" id="exampleInputimg" aria-describedby="img" placeholder="Entrer titre" value={this.state.src} onChange={this.onChangeSrc}/>
  </div>
  
  <div className="form-group">
    <label for="exampleInputprofil">Lien Profil</label>
    <input required type="text" className="form-control" id="exampleInputprofil" aria-describedby="profil" placeholder="Entrer lien profil" value={this.state.profil} onChange={this.onChangeProfil}/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Prix</label>
    <input required type="number" className="form-control" id="exampleInputPassword1" placeholder="Prix"value={this.state.montant} onChange={this.onChangeMontant} />
  </div>
  
  <div className="form-group">
    <label className="form-group" for="exampleCheck1">Description</label>
    <textarea type="text" rows="3" className="form-control" id="exampleCheck1" value={this.state.description} onChange={this.onChangeDescription} />  
  </div>
  
 
 
  <input type="submit" className="btn btn-primary gradcolor" value="Creer un nouveau produit"/>
        </form>     
        <Carteproduit src={this.state.src} description={this.state.description} profil={this.state.profil} montant={this.state.montant} titre={this.state.titre}/>

</div>
       

        </div>)
    }
}