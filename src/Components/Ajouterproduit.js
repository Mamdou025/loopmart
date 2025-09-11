import React from "react";
import { Carteproduit } from "./Carte";
import { Entete } from "./Entetes";
import axios from "axios";

export class AjouterProduit extends React.Component {
  constructor() {
    super();
    this.state = {
      src: '',
      auteur: 'woo',
      montant: 0,
      profil: '',
      description: '',
      titre: '',
      category: '',
    };

    this.onChangeSrc = this.onChangeSrc.bind(this);
    this.onChangeMontant = this.onChangeMontant.bind(this);
    this.onChangeProfil = this.onChangeProfil.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeTitre = this.onChangeTitre.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeSrc(e) {
    this.setState({ src: e.target.value });
  }

  onChangeMontant(e) {
    this.setState({ montant: e.target.value });
  }

  onChangeProfil(e) {
    this.setState({ profil: e.target.value });
  }

  onChangeDescription(e) {
    this.setState({ description: e.target.value });
  }

  onChangeTitre(e) {
    this.setState({ titre: e.target.value });
  }

  onChangeCategory(e) {
    this.setState({ category: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const produit = {
      src: this.state.src,
      auteur: 'woo',
      montant: this.state.montant,
      profil: this.state.profil,
      description: this.state.description,
      titre: this.state.titre,
      category: this.state.category,
    };

    axios
      .post('https://loopmart.herokuapp.com/Produits/add', produit)
      .then((res) => console.log(res.data));

    window.location = '/Ajouter';
  }

  render() {
    return (
      <div>
        <Entete titre={'Ajouter Un Produit'} />
        <div className="row ajouterproduit">
          <form className="card" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputtitre1">Titre</label>
              <input
                required
                type="text"
                maxLength="18"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Entrer titre"
                value={this.state.titre}
                onChange={this.onChangeTitre}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputimg">Lien Image</label>
              <input
                required
                type="text"
                className="form-control"
                id="exampleInputimg"
                placeholder="Entrer lien"
                value={this.state.src}
                onChange={this.onChangeSrc}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputprofil">Lien Profil</label>
              <input
                required
                type="text"
                className="form-control"
                id="exampleInputprofil"
                placeholder="Entrer lien profil"
                value={this.state.profil}
                onChange={this.onChangeProfil}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Prix</label>
              <input
                required
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Prix"
                value={this.state.montant}
                onChange={this.onChangeMontant}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleCategory">Catégorie</label>
              <input
                required
                type="text"
                className="form-control"
                id="exampleCategory"
                placeholder="Catégorie"
                value={this.state.category}
                onChange={this.onChangeCategory}
              />
            </div>
            <div className="form-group">
              <label className="form-group" htmlFor="exampleCheck1">
                Description
              </label>
              <textarea
                rows="3"
                className="form-control"
                id="exampleCheck1"
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
            </div>
            <input
              type="submit"
              className="btn btn-primary gradcolor"
              value="Creer un nouveau produit"
            />
          </form>
          <Carteproduit
            src={this.state.src}
            description={this.state.description}
            profil={this.state.profil}
            montant={this.state.montant}
            titre={this.state.titre}
            category={this.state.category}
          />
        </div>
      </div>
    );
  }
}
