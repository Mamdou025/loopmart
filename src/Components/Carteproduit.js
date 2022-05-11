import { render } from "@testing-library/react";
import React from "react";
import {images} from "../App"
import { Panier } from "../App";
import { Modal2,Modal } from "./Modal";




export class Seller extends React.Component{

 
  render(){
    return(
      <div>
      <div className="seller">
      <div className="options">
     <button type="button" className="btn btn-light plus" onClick={this.props.showModal}><i className="bi bi-arrows-angle-expand"id="expand"></i></button>
     <button type="button" className="btn btn-light plus" onClick={this.props.addtocart}><i className="bi bi-bookmark"></i></button>
    <button type="button" className="btn btn-light plus"><i className="bi bi-cart-plus"></i></button>

    </div>
         <span className="align-middle font-weight-bold ">{this.props.montant + "$"}</span>
      <div className="sellerinfo">
          <span  className="auteur">{this.props.auteur}</span>
        <img className="profil" src={this.props.profil} />
      </div>
    </div>
    <div><p className="font-weight-normal">{this.props.description}  </p></div>

    </div>
    )
  }

}





export class Carteproduit extends React.Component{

  constructor(){
    super();
    this.state={show:false};
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
    console.log(this.state.show)
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  addtocart =()=>{
    console.log('woops')
    Panier.push({src:`${this.props.src}`,auteur:`${this.props.auteur}`, montant:`${this.props.montant}`,profil:`${this.props.profil}`})
    console.log(Panier)
    console.log(images)
  }



  render(){
    return (
    <div className="carteproduit">
      <a href={this.props.src}><img className="rectangle" src={this.props.src} /></a>

     
    <Seller addtocart={this.addtocart} showModal={this.showModal} show={this.state.show} montant={this.props.montant} auteur={this.props.auteur} profil={this.props.profil} description={this.props.description}/>
    
    <Modal2 hideModal={this.hideModal} show={this.state.show}  src={this.props.src}  montant={this.props.montant} auteur={this.props.auteur} profil={this.props.profil} description={this.props.description}/>

    
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


  export  class Listepanier extends React.Component {
    constructor(props){
      super(props);
      this.state={liste:[]}
    }

    render() {

      return (
      
       
          <div className="row listeproduits">
                        {this.state.liste.map(img=>{return(<div className='col-xl-3  col-md-4  col-sm-6'><Carteproduit  src={img.src} auteur={img.auteur} montant={img.montant} profil={img.profil} description={img.description} /></div>)})}

          </div>
       
        
      );
    }
  }
