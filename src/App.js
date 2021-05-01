
import React, { Component } from 'react';
import Acceuil from './acceuil/Acceuil';
import Produits from './produits/Produits';
import Shop from './shop/Shop';
//Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import Navbar from './Layout/navbar/Navbar';
import Footer from './Layout/footer/Footer';
import axios from 'axios';
import Listeprd from './listproduits/Listeprd';




function App() {
    return (
        /*
      <Router>
      <div className="App">
          <header className="App-header">

              <div className="container">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-5">
                  <div className="container-fluid">
                                <Link className="navbar-brand" to="#">
                                    <img src={logo} className="logo" />
                                </Link>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                          <div className="navbar-nav">
                              <NavLink className="nav-link" aria-current="page" to="/" exact>HOME</NavLink>
                              <NavLink className="nav-link" to="/Produits">PRODUITS</NavLink>
                              <NavLink className="nav-link" to="/Shop">SHOP</NavLink>
                          </div>
                      </div>
                  </div>
               </nav>
             </div>  
                </header>
                <Route path="/" exact component={Acceuil} />
                <Route path="/Produits" component={Produits} />
                <Route path="/Shop" exact component={Shop} />
            </div>
        </Router>
        */
        <div className="container shadow-lg">
            <div id="geeks1">
            </div>
            <div id="geeks2">
                <Navbar />

                <Produits />
                <Listeprd />
                <Footer />
            </div>
        </div>
  );
}
/*
class Ap extends Component {
    state = {
        name:""
    }
    change = (event) => {
        this.setState({
            name:event.target.value
        })
}
render(){
    return (
        <div>
            <form>
                <select onChange={this.change}>
                    <option value="t-shirt">t-shirt</option>
                    <option value="robes">robes</option>
                    <option value="jupes">jupes</option>                    
                    
                </select>
                <button>Valider</button>{this.state.name}
            </form> 
                </div>
        )
}
}*/

/*
class App extends component1 {
    state = {
        name: "fatima"
    }
    render() {
        return (
            <div><Type fatima={this.state.name} /></div>
        )
    }
}
*/

export default App;
