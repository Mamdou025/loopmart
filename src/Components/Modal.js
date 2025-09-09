import React from "react";
import { Options } from "./Commentaires";











export class Modal extends React.Component{

  //{(this.props.show)?"modal showit":"modal"}
  
    render(){
      const {
        src,
        montant,
        auteur,
        profil,
        description,
        titre,
        Addproduct,
      } = this.props;
      return (
        <div
          className="modal fade"
          id={`${auteur + montant}`}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog top-aligned" role="document">
            <div className="modalelements">
              <div className="modalrow1">
                <div className="modalcell">
                  <div>
                    <div className="seller">
                      <div className="options">
                        <button
                          type="button"
                          className="btn btn-light plus"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <i className="bi bi-arrows-angle-contract"></i>
                        </button>
                      </div>

                      <div className="sellerinfo">
                        <span className="auteur">{auteur}</span>
                        <img className="profil" src={profil} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modalrow">
                <div className="modalcell" id="i7ai">
                  <a href={src}>
                    <img className="rectangle" src={src} />
                  </a>
                </div>
                <div className="modalcell2">
                  <Options
                    src={src}
                    montant={montant + '$'}
                    auteur={auteur}
                    profil={profil}
                    description={description}
                    titre={titre}
                    Addproduct={Addproduct}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  