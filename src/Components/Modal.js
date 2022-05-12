import { render } from "@testing-library/react";
import React, { useState } from "react";  
import { images } from "../App";
import { Carteproduit } from "./Carteproduit";
import { Seller } from "./Carteproduit";
import { Commentaires, Description } from "./Commentaires";
import { Options } from "./Commentaires";











export class Modal extends React.Component{

//{(this.props.show)?"modal showit":"modal"}

  render(){
  return (
    <div className={(this.props.show)?"modal showit":"modal"}  id="themodal">
    <div className="detailsproduit ">
    <div className="bigmodalcell " >
    <div className="modalrow1">
    <div className="modalcell">
    <div>
      <div className="seller">
      <div className="options">
     <button type="button" className="btn btn-light plus" onClick={this.props.hideModal}><i className="bi bi-arrows-angle-contract"></i></button>

    </div>
        
      <div className="sellerinfo">
          <span  className="auteur">{this.props.auteur}</span> 
        <img className="profil" src={this.props.profil} />
      </div>
    </div>
  
    </div>

    </div>
  </div>
  <div className="modalrow">
 
    <div className="modalcell" id="i7ai">
  
    <a href={this.props.src}><img className="rectangle" src={this.props.src} /></a>
    </div>
    <div className="modalcell2">
      <Options/>
      <Description src={this.props.src}  montant={this.props.montant + '$'} auteur={this.props.auteur} profil={this.props.profil} description={this.props.description}/>
      <Commentaires/>

    </div>
  </div>
  </div>
  </div>
  </div>
 
   
  )
  }
}
