import React from "react";
import { Modal } from "./Modal";
import { Entete } from './Entetes';
import "../Css-files/MonPanier.css";

function sendCartToWhatsApp(cart) {
  const orderMessage = cart
    .map(item => `- ${item.titre} x${item.qty} (${item.montant}$)`)
    .join('\n');
  const url = `https://wa.me/5147727974?text=${encodeURIComponent(orderMessage)}`;
  window.open(url, '_blank');
}

export class Pagepanier extends React.Component {
  render() {
    const subtotal = this.props.cart.reduce(
      (sum, item) => sum + item.montant * item.qty,
      0
    );
    const total = subtotal;
    return (
      <div>
        <Entete titre={"Mon panier"} />
        <div className="container my-4">
          <div className="row">
            <div className="col-12 col-lg-8">
              <ListePanier Addmore={this.props.Addmore} cart={this.props.cart} Addproduct={this.props.Addproduct} />
            </div>
            <div className="col-12 col-lg-4">
              <div className="summary card p-3">
                <div className="summary-total-items">
                  <span className="total-items">{this.props.totalCount}</span> Items in your Bag
                </div>
                <div className="summary-subtotal">
                  <div className="subtotal-title">Subtotal</div>
                  <div className="subtotal-value final-value" id="basket-subtotal">
                    {subtotal.toFixed(2)}
                  </div>
                </div>
                <div className="summary-delivery">
                  <select name="delivery-collection" className="summary-delivery-selection form-select">
                    <option value="0" defaultValue>
                      Select Collection or Delivery
                    </option>
                    <option value="collection">Collection</option>
                    <option value="first-class">Royal Mail 1st Class</option>
                    <option value="second-class">Royal Mail 2nd Class</option>
                    <option value="signed-for">Royal Mail Special Delivery</option>
                  </select>
                </div>
                <div className="summary-total">
                  <div className="total-title">Total</div>
                  <div className="total-value final-value" id="basket-total">
                    {total.toFixed(2)}
                  </div>
                </div>
                <div className="basket-module">
                  <label htmlFor="promo-code">Enter a promotional code</label>
                  <div className="d-flex">
                    <input id="promo-code" type="text" name="promo-code" maxLength="5" className="promo-code-field form-control" />
                    <button className="promo-code-cta btn btn-outline-primary ms-2">Apply</button>
                  </div>
                </div>
                <div className="summary-checkout">
                  <button className="checkout-cta btn btn-primary gradcolor mb-2">Go to Secure Checkout</button>
                  <button className="checkout-cta btn btn-primary gradcolor" onClick={() => sendCartToWhatsApp(this.props.cart)}>
                    Order via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

  export class Cartepanier2 extends React.Component{
    render(){
      return(<div>



<div className="container mt-5 mb-5">
    <div className="d-flex justify-content-center row">
        <div className="col-md-10">
            <div className="row p-2 bg-white border rounded">
                <div className="col-md-3 mt-1">
                  <img className="img-fluid img-responsive rounded product-image" src={this.props.src} alt={this.props.titre}/>
                </div>
                <div className="col-md-6 mt-1">
                    <h5>{this.props.titre}</h5>
                    <div className="d-flex flex-row">
                        <div className="ratings mr-2"></div><h4>Qt : {this.props.qty}</h4>
                    </div>
                    <p className="text-justify text-truncate para mb-0">{this.props.description}</p>
                </div>
                <div className="col-md-3 mt-1 d-flex flex-column align-items-center border-start">
                    <div className="d-flex flex-row align-items-center">
                        <h4 className="mr-1">{this.props.montant} $</h4>
                    </div>
                    <h6 className="text-success">Free shipping</h6>
                    <div className="d-flex flex-column mt-4">
                      <button
                        className="btn btn-primary btn-sm gradcolor"
                        type="button"
                        data-toggle="modal"
                        data-target={`#${this.props.auteur + this.props.montant}`}
                      >
                        Details
                      </button>
                      <button className="btn btn-outline-primary btn-sm mt-2" type="button">
                        + Collection
                      </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Modal src={this.props.src}  montant={this.props.montant} auteur={this.props.auteur} profil={this.props.profil} description={this.props.description} Addproduct={this.props.Addproduct} />
</div>)
    }

  }
export class Cartepanier extends React.Component{
    constructor(){
      super();
      this.state={qute:0}
    }
    Update=()=>{
      this.props.Addmore();
      this.setState({qute:this.props.qty})
    }
    render(){
      return (
        <div className="basket-product card mb-3">
          <div className="row g-3 align-items-center">
            <div className="col-5 col-md-4">
              <div className="product-image">
                <img src={this.props.src} alt="Produit" className="img-fluid rounded" />
              </div>
            </div>
            <div className="col-7 col-md-4">
              <h3 className="product-title mb-1"><strong><span className="item-quantity">{this.props.qty} x</span></strong> {this.props.titre}</h3>
              <p className="mb-1">Product Code - {this.props.id}</p>
              <div className="d-flex flex-column mt-2">
                <button
                  className="btn btn-primary btn-sm gradcolor"
                  type="button"
                  data-toggle="modal"
                  data-target={`#${this.props.auteur + this.props.montant}`}
                >
                  Details
                </button>
                <button className="btn btn-outline-primary btn-sm mt-2" type="button">
                  + Collection
                </button>
              </div>
            </div>
            <div className="col-12 col-md-4 text-md-end">
              <h4 className="product-price mb-1">Prix : {this.props.montant}$</h4>
              <div className="d-flex align-items-center justify-content-center my-2">
                <button className="prdct-qty-btn" type="button"><i className="fa fa-minus"></i></button>
                <input type="text" name="qty" className="qty-input" disabled value="1" />
                <button className="prdct-qty-btn" type="button" onClick={this.Update}><i className="fa fa-plus"></i></button>
              </div>
              <h5 className="mt-2">subtotal: {this.props.montant * this.props.qty}$ </h5>
            </div>
          </div>
          <Modal src={this.props.src} montant={this.props.montant} auteur={this.props.auteur} profil={this.props.profil} description={this.props.description} Addproduct={this.props.Addproduct} />
        </div>
      )
    }
}



 export  class ListePanier extends React.Component{
    render(){
      return this.props.cart.map((img) => (
        <Cartepanier
          Addmore={this.props.Addmore.bind(this, img)}
          Addproduct={this.props.Addproduct.bind(this, img)}
          id={img.id}
          titre={img.titre}
          key={img.id}
          src={img.src}
          description={img.description}
          auteur={img.auteur}
          montant={img.montant}
          qty={img.qty}
        />
      ));
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
    