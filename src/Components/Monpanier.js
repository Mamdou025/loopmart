import { render } from "@testing-library/react";
import React from "react";
import {images} from "../App"
import { Panier,Panier2 } from "../App";
import { Modal } from "./Modal";
import { Navigation } from './Navigation';
import './Carte'
import { Carteproduit } from "./Carte";
import { Entete } from  './Entetes';
import { Featuredlistings } from './FeaturedListings';
import { SectionAccueil } from './SectionAccueil';




 export  class Monpanier extends React.Component {
   



    render() {

      return (
      
       
          <div className="row listeproduits">
         
               {this.state.liste.map(img=>{return(<Carteproduit  src={img.src} auteur={img.auteur} montant={img.montant} profil={img.profil} description={img.description} />)})}
          </div>
       
        
      );
    }
  }