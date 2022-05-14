import React from "react";
import {Carteproduit,} from './Carte'
import {images} from '../App'

 





export  class Featuredlistings extends React.Component {

    render() {
  
      return (<div>
          

        
        <div className="rowl  featured" >
           
    <div className="cell bigcell ">
        <Carteproduit  Addproduct={this.props.Addproduct} src={images[0].src} auteur={images[1].auteur} montant={images[2].montant} profil={images[3].profil}  description={images[5].description}/>
    </div>
    <div className="cell minicell  " >
      <div className="rowl " >
        <div className="cell col-sm-6 " >
        <Carteproduit   Addproduct={this.props.Addproduct} src={images[4].src} auteur={images[5].auteur} montant={images[6].montant} profil={images[3].profil} description={images[3].description}/>

        </div>
        <div className="cell col-sm-6 ">
        <Carteproduit src={images[6].src} auteur={images[3].auteur} montant={images[6].montant} profil={images[5].profil} description={images[4].description}/>

        </div>
      </div>
      <div className="rowl  " >
        <div className="cell col-sm-6" >
        <Carteproduit src={images[7].src} auteur={images[6].auteur} montant={images[5].montant} profil={images[3].profil} description={images[6].description}/>

        </div>
        <div className="cell col-sm-6" >
        <Carteproduit  src={images[8].src} auteur={images[7].auteur} montant={images[8].montant} profil={images[3].profil} description={images[5].description}/>

        </div>
      </div>
    </div>
  </div>
  </div>
       
    


      );
        
    }
  }
  
