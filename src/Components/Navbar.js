import React from "react";
import {Navbarl} from '../App'




 export class Navbar3 extends React.Component{

    render(){
        return(
            <div className="navbar fixed-top navbar-expand-md custom-navbar navbar-dark">
                         <img className="navbar-brand" src={Navbarl.logo} id="logo_custom" width="10%"  alt="logo"/>
                            <button className="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                <span className="navbar-toggler-icon "></span>
                            </button>
                              <div className="collapse navbar-collapse " id="collapsibleNavbar">
                                  <ul className="navbar-nav ml-auto ">
                                    <li className="nav-item">
                                      <a className="nav-link" href="#offer"><b>Our Offer</b></a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" href="#"><b>How it works</b></a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" href="#"><b>Benifits</b></a>
                                    </li>  
                                    <li className="nav-item">
                                      <a className="nav-link" href="#"><b>Benifits</b></a>
                                    </li>  
                                    <li className="nav-item">
                                      <a className="nav-link" href="#"><b>Benifits</b></a>
                                    </li> 
                                  </ul>
                              </div>  
</div>
        );
    }
  }