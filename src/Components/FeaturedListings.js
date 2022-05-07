import React from "react";
import {Carteproduit2,Carteproduit,Carteproduit3} from './Carteproduit'
import {images} from '../App'

 
export  class Featuredlistings extends React.Component {
    render() {
  
      return (<div>
          

        
        <div className="rowl" id="icaj">
           
    <div className="cell  " id="isok">
        <Carteproduit3 src={images[0].src} auteur={images[1].auteur} montant={images[2].montant} profil={images[3].profil}/>
    </div>
    <div className="cell" id="ibhs">
      <div className="rowl" id="i9ik">
        <div className="cell" id="io6p">
        <Carteproduit2 src={images[4].src} auteur={images[5].auteur} montant={images[6].montant} profil={images[3].profil}/>

        </div>
        <div className="cell" id="ifff">
        <Carteproduit2 src={images[6].src} auteur={images[3].auteur} montant={images[6].montant} profil={images[5].profil}/>

        </div>
      </div>
      <div className="rowl">
        <div className="cell" id="io9h">
        <Carteproduit2 src={images[7].src} auteur={images[6].auteur} montant={images[5].montant} profil={images[3].profil}/>

        </div>
        <div className="cell">
        <Carteproduit2  src={images[8].src} auteur={images[7].auteur} montant={images[8].montant} profil={images[3].profil}/>

        </div>
      </div>
    </div>
  </div>
  </div>
       
    


      );
        
    }
  }
  
