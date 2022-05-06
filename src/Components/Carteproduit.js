import React from "react";
import {images} from "../App"


class Carteproduit extends React.Component {



  render() {
    
    return (
      
         <div className="carteproduit">
    <a href={this.props.src}><img className="rectangle" src={this.props.src} /></a>
    <div className="seller">
      <div className="options">
     <button type="button" className="btn btn-outline-dark plus"><i className="bi bi-arrows-angle-expand"></i></button>
     <button type="button" className="btn btn-outline-dark plus"><i className="bi bi-bookmark"></i></button>
    <button type="button" className="btn btn-outline-dark plus"><i className="bi bi-cart-plus"></i></button>


    </div>
    


          <span className="align-middle font-weight-bold ">{this.props.montant}$</span>



     

      <div className="sellerinfo">
     
          <span  className="auteur">{this.props.auteur}</span>
       
        <img className="profil" src={this.props.profil} />
     

      </div>
      
      
    
    </div>
    <div><p className="font-weight-normal">{this.props.description}  </p></div>
    
  </div>
    
      
    );
  }
}

  class Listeproduits extends React.Component {
    render() {

      return (
      
       
          <div className="row listeproduits">
         
               {images.map(img=>{return(<div className='col-xl-3  col-md-4  col-sm-6'><Carteproduit  src={img.src} auteur={img.auteur} montant={img.montant} profil={img.profil} description={img.description} /></div>)})}
          </div>
       
        
      );
    }
  }

  class Carteproduit2 extends React.Component {



    render() {
      
      return (
        
           <div className="carteproduit2">
      <a href={this.props.src}><img className="rectangle2" src={this.props.src} /></a>
      <div className="seller">
  
            <h5 className="montant">{this.props.montant}$</h5>
       
  
        <div className="sellerinfo">
       
            <span  className="auteur">{this.props.auteur}</span>
         
          <img className="profil" src={this.props.profil} />
       
  
        </div>
        
        
      
      </div>
    </div>
      
        
      );
    }
  }



  class Carteproduit3 extends React.Component {



    render() {
      
      return (
        
           <div className="carteproduit3">
      <a href={this.props.src}><img className="rectangle3" src={this.props.src} /></a>
      <div className="seller">
  
            <h3 className="montant">{this.props.montant}$</h3>
       
  
        <div className="sellerinfo">
       
            <span  className="auteur">{this.props.auteur}</span>
         
          <img className="profil" src={this.props.profil} />
       
  
        </div>
        
        
      
      </div>
    </div>
      
        
      );
    }
  }
export {Listeproduits}
export {Carteproduit};
export {Carteproduit2}
export {Carteproduit3}




