import React from "react";
import { Carteproduit } from "./Carte";
import { Entete } from  './Entetes';
import { SectionAccueil } from './SectionAccueil';



 

export class Mycart extends React.Component{



  render(){
    return(
      <div>
       <SectionAccueil/>
       
    
  
       <Entete titre={'liste de produits'} />
     
      <div className="row listeproduits">
        {this.props.produits.slice(0).reverse().map(img=>{return(
         
         <div className='col-xl-3  col-md-4  col-sm-6'>
         <Carteproduit Ajouter2={this.props.Ajouter2} Addproduct={this.props.Addproduct.bind(this, img)}  src={img.src} auteur={img.auteur} montant={img.montant} profil={img.profil} description={img.description} titre={img.titre} key={`clef${img.montant}`+`${img.profil}`+`${img.description}${img.src}`} />
         </div>
        )
        })}
      </div>
              
    </div>


              

      
    )
  }
}