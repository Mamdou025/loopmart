import { render } from "@testing-library/react";
import React from "react";  
import { images } from "../App";
import { Styles } from "../App";
import { Carteproduit } from "./Carteproduit";


class Modal   extends React.Component{
    render(){
    return (
        <div className={Styles.carteproduit[0]}>
        <a href={images[2].src}><img className={Styles.rectangle[0]} src={images[9].src} /></a>
          <div>
    <div className="seller">
      <div className="options">
     <button type="button" className="btn btn-outline-dark plus"><i className="bi bi-bookmark"></i></button>
    <button type="button" className="btn btn-outline-dark plus"><i className="bi bi-cart-plus"></i></button>
    </div>
         <span className="align-middle font-weight-bold ">{images[11].montant}$</span>
      <div className="sellerinfo">
          <span  className="auteur">{images[10].auteur}</span>
        <img className="profil" src={images[8].profil} />
      </div>
    </div>
    <div><p className="font-weight-normal">{this.props.description}  </p></div>
    
        </div> 
        </div>     
    )
    }
}
export default Modal