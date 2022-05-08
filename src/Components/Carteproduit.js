import React from "react";
import {images} from "../App"




export class Carteproduit extends React.Component{
  render(){
    return (
    <div className="carteproduit">
      <a href={this.props.src}><img className="rectangle" src={this.props.src} /></a>

      <div>
    <div className="seller">
      <div className="options">
     <button type="button" className="btn btn-light plus"><i className="bi bi-arrows-angle-expand"></i></button>
     <button type="button" className="btn btn-light plus"><i className="bi bi-bookmark"></i></button>
    <button type="button" className="btn btn-light plus"><i className="bi bi-cart-plus"></i></button>
    </div>
         <span className="align-middle font-weight-bold ">{this.props.montant}$</span>
      <div className="sellerinfo">
          <span  className="auteur">{this.props.auteur}</span>
        <img className="profil" src={this.props.profil} />
      </div>
    </div>
    <div><p className="font-weight-normal">{this.props.description}  </p></div>
    </div>
    </div>
    )
  }
}



  export  class Listeproduits extends React.Component {
    render() {

      return (
      
       
          <div className="row listeproduits">
         
               {images.map(img=>{return(<div className='col-xl-3  col-md-4  col-sm-6'><Carteproduit  src={img.src} auteur={img.auteur} montant={img.montant} profil={img.profil} description={img.description} /></div>)})}
          </div>
       
        
      );
    }
  }



