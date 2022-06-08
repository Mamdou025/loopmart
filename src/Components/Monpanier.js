import React from "react";
import { Modal } from "./Modal";
import './Carte'
import { Entete } from  './Entetes';




export class Pagepanier extends React.Component{
  render(){
    return(

      <div>
        <Entete titre={'Mon panier'}/>
        <main>
        <div className="basket">
       
        <ListePanier  Addmore={this.props.Addmore} cart={this.props.cart}/>
      </div>
      <aside>
       <div class="summary">
        <div class="summary-total-items"><span class="total-items">{this.props.cartcount}</span> Items in your Bag</div>
        <div class="summary-subtotal">
          <div class="subtotal-title">Subtotal</div>
          <div class="subtotal-value final-value" id="basket-subtotal">130.00</div>
          <div class="summary-promo hide">
            <div class="promo-title">Promotion</div>
            <div class="promo-value final-value" id="basket-promo"></div>
          </div>
        </div>
        <div class="summary-delivery">
          <select name="delivery-collection" class="summary-delivery-selection" data-slug-id="item-price-quantity-subtotal-5-items-in-your-bag-subtotal-130-00-total-130-00-go-to-secure-checkout-select-one" data-has-form="false" data-category="user-data">
              <option value="0" selected="selected">Select Collection or Delivery</option>
             <option value="collection">Collection</option>
             <option value="first-class">Royal Mail 1st Class</option>
             <option value="second-class">Royal Mail 2nd Class</option>
             <option value="signed-for">Royal Mail Special Delivery</option>
          </select>
        </div>
        <div class="summary-total">
          <div class="total-title">Total</div>
          <div class="total-value final-value" id="basket-total">130.00</div>
        </div>


        <div class="basket-module">
        <label for="promo-code">Enter a promotional code</label>
        <input id="promo-code" type="text" name="promo-code" maxlength="5" class="promo-code-field" data-slug-id="enter-a-promotional-code" data-has-form="false" data-category="user-data"/>
        <button class="promo-code-cta">Apply</button>
      </div>


        <div class="summary-checkout">
          <button class="checkout-cta">Go to Secure Checkout</button>
        </div>
      </div>
       </aside>
       </main>
       
      </div>




    )
  }
}

  export class Cartepanier2 extends React.Component{
    render(){
      return(<div>



<div className="container mt-5 mb-5">
    <div className="d-flex justify-content-center row">
        <div className="col-md-10">
            <div className="row p-2 bg-white border rounded">
                <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={this.props.src}/></div>
                <div className="col-md-6 mt-1">
                    <h5>{this.props.titre}</h5>
                    <div className="d-flex flex-row">
                        <div className="ratings mr-2"></div><h4>Qt : {this.props.qty}</h4>
                    </div>
                    <p className="text-justify text-truncate para mb-0">{this.props.description}</p>
                </div>
                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div className="d-flex flex-row align-items-center">
                        <h4 className="mr-1">{this.props.montant} $</h4>
                    </div>
                    <h6 className="text-success">Free shipping</h6>
                    <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm gradcolor" type="button"  data-toggle="modal" data-target={"#"+`${this.props.auteur+this.props.montant}`}  >Details</button><button className="btn btn-outline-primary btn-sm mt-2 " type="button">+ Collection</button></div>
                </div>
            </div>
        </div>
    </div>
</div>
<Modal src={this.props.src}  montant={this.props.montant} auteur={this.props.auteur} profil={this.props.profil} description={this.props.description} />
</div>)
    }

  }


  export class Cartepanier extends React.Component{
    constructor(){
      super();
      this.state={qute:0}

    
    }
    Update=()=>{
      this.props.Addmore()
     
      this.setState({qute:this.props.qty})


    }
    render(){
      return(<div>
        <div class="basket-product ">
        <div class="item">
          <div class="product-image">
            <img src={this.props.src} alt="Placholder Image 2" class="rounded"/>
          </div>
          <div class="product-details">
            <h3><strong><span class="item-quantity">{this.props.qty} x</span></strong> {this.props.titre}</h3>
            <p><strong>---</strong></p>
            <p>Product Code - {this.props.id}</p>
            <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm gradcolor" type="button"  data-toggle="modal" data-target={"#"+`${this.props.auteur+this.props.montant}`}  >Details</button><button className="btn btn-outline-primary btn-sm mt-2 " type="button">+ Collection</button></div>

          </div>

        </div>
        <div class="price">
          <h4>Prix : {this.props.montant}$</h4>
          <div class="prdct-qty-container"><button class="prdct-qty-btn" type="button"><i class="fa fa-minus"></i>
          </button><input type="text" name="qty" class="qty-input-box" disabled="" value="1" data-slug-id="passion-fruit-80-80" data-has-form="false" data-category="user-data"/>
          <button class="prdct-qty-btn" type="button" onClick={this.Update} ><i class="fa fa-plus"></i></button></div>
          <h5>subtotal: {this.props.montant*this.props.qty}$ </h5>

          </div>
        
        
      </div>




<Modal src={this.props.src}  montant={this.props.montant} auteur={this.props.auteur} profil={this.props.profil} description={this.props.description} />
</div>)
    }

  }



 export  class ListePanier extends React.Component{
    render(){
      return(this.props.cart.map(img=>{ return(<Cartepanier Addmore={this.props.Addmore.bind(this,img)} id={img._id} titre={img.titre} key={img.montant+img.src} src={img.src} description={img.description} auteur={img.auteur} montant={img.montant} qty={img.qty}/>)}))
    }
  }

  export class Total extends React.Component{
    render(){
      return(


        <div>

        </div>




      )
    }
  }
    