

import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


import { Navigation } from './Components/Navigation';
import { AjouterProduit } from './Components/Ajouterproduit';
import {Pagepanier} from './Components/Monpanier'
import {Mycart} from './Components/Accueil'
import CollectionList from './Components/CollectionList';




import './Css-files/App.css';
import './Css-files/CarteProduit.css'
import './Css-files/FeaturedListings.css'
import './Css-files/SectionAccueil.css'
import './Css-files/Modal.css'
import './Css-files/Commentaires.css'
import './Css-files/AjouterProduit.css'
import './Css-files/Navbar.css'
import './Css-files/MonPanier.css'

import { images } from './data/images';
export const Styles = { carteproduit:["carteproduit","carteproduit2","carteproduit3","carteproduit4"], rectangle:["rectangle","rectangle2","rectangle3","rectangle4"],background:["green","blue","yellow","red"] };






class App extends React.Component {
  constructor(){
    super();
   this.state={ produits:[], cart:[], collection: [], searchQuery: ''}
  }

  handleSearch = (query) => {
    this.setState({searchQuery: query});
  }


// Replace your existing componentDidMount with this:

async componentDidMount() {
  try {
    const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
    const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase credentials');
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/produits`, {
      method: 'GET',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const dataWithIds = data.map((p, idx) => ({
      ...p,
      id: p.id || `${p.src || ''}-${p.titre || idx}`
    }));
    this.setState({ produits: dataWithIds });
    console.log('✅ Products loaded from Supabase:', dataWithIds.length, 'items');
    
  } catch (error) {
    console.log('❌ Error:', error);
    // Use your sample data as fallback, ensure each item has an id
    const localData = images.map((p, idx) => ({
      ...p,
      id: p.id || `${p.src || ''}-${p.titre || idx}`
    }));
    this.setState({ produits: localData });
  }
}

  Addproduct = (img) => {
    const productId = img.id || `${img.src}-${img.titre}`;
    const kart = [...this.state.cart];
    const index = kart.findIndex((object) => object.id === productId);
    if (index === -1) {
      kart.push({ ...img, id: productId, qty: 1 });
    } else {
      kart[index].qty++;
    }
    this.setState({ cart: kart });
  };

  AddtoCollection = (img) => {
    const productId = img.id || `${img.src}-${img.titre}`;
    this.setState(prevState => {
      const exists = prevState.collection.find(item => item.id === productId);
      if (exists) return null;
      return { collection: [...prevState.collection, { ...img, id: productId }] };
    });
  }

  Addmore=(img)=>{
    img.qty++;
  }
 


  render() {
    const cartCount = this.state.cart.reduce((sum, p) => sum + p.qty, 0);
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation totalCount={cartCount} />
          <Routes>
            <Route
              path="/"
              element={
                <Mycart
                  elementscart={this.state.cart}
                  produits={this.state.produits}
                  Addproduct={this.Addproduct}
                  AddtoCollection={this.AddtoCollection}
                  searchQuery={this.state.searchQuery}
                  onSearch={this.handleSearch}
                />
              }
            />
            <Route
              path="/panier"
              element={
                <Pagepanier
                  totalCount={cartCount}
                  Addmore={this.Addmore}
                  cart={this.state.cart}
                  Addproduct={this.Addproduct}
                  AddtoCollection={this.AddtoCollection}
                />
              }
            />
            <Route path="/Ajouter" element={<AjouterProduit />} />
            <Route path="/Collection" element={<CollectionList items={this.state.collection} Addproduct={this.Addproduct} AddtoCollection={this.AddtoCollection} />} />
            <Route path="/Messages" element={<h1>Messages</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

  
}

export default App;

