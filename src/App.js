

import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import axios from 'axios';


import { Navigation } from './Components/Navigation';
import { AjouterProduit } from './Components/Ajouterproduit';
import {Pagepanier} from './Components/Monpanier'
import {Mycart} from './Components/Accueil'




import './Css-files/App.css';
import './Css-files/CarteProduit.css'
import './Css-files/FeaturedListings.css'
import './Css-files/SectionAccueil.css'
import './Css-files/Modal.css'
import './Css-files/Commentaires.css'
import './Css-files/AjouterProduit.css'
import './Css-files/Navbar.css'
import './Css-files/MonPanier.css'


//Small Database 

export const images =[
  { src:"https://images.unsplash.com/photo-1559814048-149b70765d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" , auteur:'Milo', montant:300, profil:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" ,description:"in voluptate velit esse cillum dolore eu fugiat nulla",titre:"secondelem " },             
  { src:"https://images.unsplash.com/photo-1565622871630-8e453c4b6ed9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" , auteur:'Polaroid', montant:220, profil:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" ,description:"minim veniam, quis nostrud exercitation ullamco ",titre:"Third element "},  
  { src:"https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" , auteur:'Candyman', montant:120, profil:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" ,description:"Sed ut perspiciatis unde omnis iste natus error sit",titre:" titre produit "},               
  { src:"https://images.unsplash.com/photo-1566864222010-d45675442c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" , auteur:'Photoboy', montant:59, profil:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" ,description:"voluptatem accusantium doloremque laudantium,",titre:"doloremque"},               
  { src:"https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" , auteur:'Orange', montant:523, profil:"https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" ,description:" cUt enim ad minim veniam, . ",titre:"cUt enim ad "},               
  { src:"https://images.unsplash.com/photo-1538426455889-1311ea3dad57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" , auteur:'Tournesol', montant:34, profil:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" ,description:"beatae vitae dicta sunt explicabo",titre:"csunt explicabo"},
  { src:"https://images.unsplash.com/photo-1565098772267-60af42b81ef2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1210&q=80" , auteur:'Tournesol', montant:95, profil:"https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" ,description:"fugiat quo voluptas nulla pariatur",titre:"oluptas nulla"},    
  { src:"https://images.unsplash.com/photo-1559594323-f740d8a64cde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80" , auteur:'Orange', montant:54, profil:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" ,description:"reprehenderit qui in ea voluptate velit",titre:"reprehenderit qui"},               
  { src:"https://images.unsplash.com/photo-1563529427727-cb7f13f3a756?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" , auteur:'Tournesol', montant:15, profil:"https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" ,description:"quo minus id quod maxime",titre:"id quod maxime"},
  { src:"https://images.unsplash.com/photo-1563559983710-47af8035e4be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" , auteur:'Tournesol', montant:37, profil:"https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" ,description:"eiciendis voluptatibus maiores alias consequatur",titre:"voluptatibus maiores"},                      
  { src:"https://images.unsplash.com/photo-1561641377-f7456d23aa9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80" , auteur:'Verre', montant:25, profil:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" ,description:"eiciendis alias consequatur",titre:" maiores"},                      
  { src:"https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" , auteur:'Framboo', montant:15, profil:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" ,description:"turvoluptatem accusantium ",titre:"nostrud exercitation "},                      
  { src:"https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" , auteur:'Orange', montant:67, profil:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" ,description:" accusantium minim veniam, quis nostrud exercitation ullamco voluptatem accusantium doloremque laudantium",titre:"doloremque laudantium"},                      
       ]



  export const featuredlist=[images.at(-5),images.at(-4),images.at(-10),images.at(-12)]


  export const Styles = { carteproduit:["carteproduit","carteproduit2","carteproduit3","carteproduit4"], rectangle:["rectangle","rectangle2","rectangle3","rectangle4"],background:["green","blue","yellow","red"]} 


  export const Panier=[ { src:"https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" , auteur:'Framboo', montant:15, profil:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" ,description:"turvoluptatem accusantium "},                      
                        { src:"https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" , auteur:'Orange', montant:67, profil:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" ,description:" accusantium minim veniam, quis nostrud exercitation ullamco voluptatem accusantium "}
                      ];

 export const Panier2=[ { src:"https://images.unsplash.com/photo-1537800534001-f3e01aa1c34c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" , auteur:'Viva', montant:12,profil:"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",description:"Lorem ipsum dolor sit amet, cUt enim ad minim veniam, . "},
 { src:"https://images.unsplash.com/photo-1559814048-149b70765d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" , auteur:'Milo', montant:300, profil:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" ,description:"in voluptate velit esse cillum dolore eu fugiat nulla" }
                    ];






//FIN SMALL DATABASE




class App extends React.Component {
  constructor(){
    super();
   this.state={ produits:[],cart:[]}
  }


  componentDidMount() {
    axios.get(process.env.REACT_APP_BACKEND_URL+'/Produits/')
      .then(response => {
        this.setState({ produits: response.data })
        console.log(process.env.REACT_APP_BACKEND_URL)
      })
      .catch((error) => {
        console.log(error);
      })
  }



  Addproduct=(img)=>{
    let kart = this.state.cart ;
      const index = this.state.cart.findIndex(object=>object._id === img._id);
      if(index === -1){
        img.qty=1;
        kart.push(img)  
      }else{
        img.qty++;
      }
    this.setState({cart:kart})
  }

  AddtoCollection=(img)=>{

console.log(img)
  }

  Addmore=(img)=>{
    img.qty++;
  }
 


  render(){
    return (
      <BrowserRouter>
      <div className="App">
        
       
        <Navigation cartcount= {this.state.cart.length} />
        <Routes>
        <Route path="/" element={<Mycart elementscart={this.state.cart} produits={this.state.produits}  Addproduct={this.Addproduct} />} />
       <Route path="/panier" element={  <Pagepanier cartcount={this.state.cart.length} Addmore={this.Addmore} cart ={this.state.cart}/>}  />
       <Route  path="/Ajouter" element={<AjouterProduit/>}/>  
       <Route  path="/Collection" element={<h1>Collection</h1>}/>  
       <Route  path="/Messages" element={<h1>Messages</h1>}/>  



        </Routes>
        
        </div>
        </BrowserRouter>
    );

  }

  
}

export default App;

