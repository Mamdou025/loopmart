import React from "react";
import { Carteproduit } from "./Carte";
import { Entete } from "./Entetes";

export class Collection extends React.Component {
  render() {
    return (
      <div>
        <Entete titre={"Ma collection"} />
        <div className="row listeproduits">
          {this.props.collection.map((img) => (
            <div className='col-xl-3  col-md-4  col-sm-6' key={img.id}>
              <Carteproduit
                id={img.id}
                src={img.src}
                auteur={img.auteur}
                montant={img.montant}
                profil={img.profil}
                description={img.description}
                titre={img.titre}
                Addproduct={this.props.Addproduct}
                AddtoCollection={this.props.AddtoCollection}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

