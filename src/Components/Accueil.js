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









 

export class Mycart extends React.Component{



  render(){
    return(
      <div>
       <SectionAccueil/>
       
    
  
       <Entete titre={'liste de produits'} />
     
      <div className="row listeproduits">
        {this.props.produits.map(img=>{return(
         
            <Carteproduit Ajouter2={this.props.Ajouter2} Addproduct={this.props.Addproduct.bind(this, img)}  src={img.src} auteur={img.auteur} montant={img.montant} profil={img.profil} description={img.description} titre={img.titre} key={`clef${img.montant}`+`${img.profil}`+`${img.description}${img.src}`} />
        )
        })}
        
      </div>
              
    </div>


              

      
    )
  }
}