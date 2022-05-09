import { render } from "@testing-library/react";
import React from "react";  
import { images } from "../App";
import { Carteproduit } from "./Carteproduit";
import { Seller } from "./Carteproduit";
import { Commentaires } from "./Commentaires";


export class Modal   extends React.Component{
    render(){
    return (
    <div className="bigcell ">
        <Carteproduit src={images.at(-7).src} auteur={images.at(-7).auteur} montant={images.at(-7).montant} profil={images.at(-7).profil} description={images.at(-7).description}/>
        </div>  
    )
    }
}


export class Modal2   extends React.Component{
  render(){
  return (
    <div className="bigmodalcell modal" >
    <div class="modalrow">
    <div class="modalcell">
      <Seller montant={this.props.montant} auteur={this.props.auteur} profil={this.props.profil} description={this.props.description}/>

    </div>
  </div>
  <div class="modalrow">
 
    <div class="modalcell" id="i7ai">
  
    <a href={this.props.src}><img className="rectangle" src={this.props.src} /></a>
    </div>
    <div class="modalcell">
      <Commentaires/>

    </div>
  </div>
  </div>
 
   
  )
  }
}
