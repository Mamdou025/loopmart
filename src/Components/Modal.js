import { Commentaires, Description } from "./Commentaires";
import React from "react";
import { Options } from "./Commentaires";
import { CSSTransition } from "react-transition-group";










export class Modal extends React.Component{

//{(this.props.show)?"modal showit":"modal"}

  render(){
  return (
    <div className={(this.props.show)?"modal showit":"modal "}  id="themodal">
    <div className={(this.props.show)?"bigmodalcell":"nothing"}  >
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
 
   
  )
  }
}


export class ModalZ extends React.Component{

  //{(this.props.show)?"modal showit":"modal"}
  
    render(){
    return (
      


      <div className="modal fade" id={`${this.props.auteur+this.props.montant}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
      
          <div>
          <div className="modalrow1">
          <div className="modalcell">
          <div>
            <div className="seller">
            <div className="options">
           <button type="button" className="btn btn-light plus"data-dismiss="modal" aria-label="Close"><i className="bi bi-arrows-angle-contract"></i></button>
      
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
  