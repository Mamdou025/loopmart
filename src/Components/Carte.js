import React from "react"
import { Panier } from "../App"
import { Modal,ModalZ } from "./Modal"
import { Options } from "./Commentaires"
import { Description } from "./Commentaires"
import { Commentaires } from "./Commentaires"





export class Seller extends React.Component{


    addToCart=()=>{
  
      Panier.push({src:`${this.props.src}`, montant:`${this.props.montant}`, auteur:`${this.props.auteur}` ,profil:`${this.props.profil}`,titre:`${this.props.titre}` ,description:`${this.props.description}`})
      console.log(Panier)
      console.log(this.props.titre)
   }
  
   
    render(){
      return(
        <div className="productinfo" id={this.props.idproductInfo}>
        <div className="seller">
        <div className="options">
       <button type="button" className="btn btn-light plus" data-toggle="modal" data-target={"#"+`${this.props.auteur+this.props.montant}`}   onClick={this.props.showModal}><i className="bi bi-arrows-angle-expand"id="expand"></i></button>
       <button type="button" className="btn btn-light plus" ><i className="bi bi-bookmark"></i></button>
      <button type="button" className="btn btn-light plus" onClick={this.props.Addproduct}><i className="bi bi-cart-plus"></i></button>
  
      </div>
      <p className="text-sm-center">{this.props.titre}</p>

           <span className="align-middle font-weight-bold ">{this.props.montant + "$"}</span>
        <div className="sellerinfo">
          <img  className="profil" src={this.props.profil} />
        </div>
      </div>
      </div>
      )
    }
  
  }
  
  
  
  
  
  export class Carteproduit extends React.Component{
  
    constructor(){
      super();
      this.state={show:false ,list:Panier,value:[ { src:"https://images.unsplash.com/photo-1561641377-f7456d23aa9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80" , auteur:'Verre', montant:25, profil:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" ,description:"eiciendis alias consequatur"}]};
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
    }
  
    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };

    

    hideDetails =()=>{
      const modetails = document.getElementById(`${this.props.auteur+this.props.montant+"info"}`)
      modetails.classList.remove("Shown")
      console.log(modetails)
 
     }

  
  
    render(){
      return (
        <div className='col-xl-3  col-md-4  col-sm-6'>
      <div className="carteproduit">
        <img   className="rectangle" src={this.props.src}   />
  
  
      <Seller titre={this.props.titre} idproductInfo={`${this.props.auteur+this.props.montant+"info"}`} hideModal={this.hideModal} showModal={this.showModal} Addproduct={this.props.Addproduct} src={this.props.src} montant={this.props.montant} auteur={this.props.auteur} profil={this.props.profil} description={this.props.description}/>
      
      <ModalZ show={this.state.show} src={this.props.src}  montant={this.props.montant} auteur={this.props.auteur} profil={this.props.profil} description={this.props.description}/>
  
      
      </div>
      </div>
      )
    }
  }
  