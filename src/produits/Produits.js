import React, { Component } from 'react';
import axios from 'axios';
class Produits extends Component {
    constructor(props){
        super(props)
        this.state = {
            produits: [
                {
                    
                    "id": 1,
                    "image": "https://i.pinimg.com/736x/49/33/a8/4933a875979c246318216c801836fa9e.jpg",
                    "desc" : "dfdgfdgfhdgfhdgfdhfgdhgfdhfgdhfgdhfgdfdhfgdf"
                },
                {
                    "id": 2,
                    "image": "https://i.pinimg.com/originals/fb/58/c3/fb58c340d3481e926fdf8850b4f696ce.jpg",
                    "desc": "dfdgfdgfhdgfhdgfdhfgdhgfdhfgdhfgdhfgdfdhfgdf"
                },
                {
                    "id": 3,
                    "image": "https://image.made-in-china.com/202f0j10prSYlQdbCeok/Fashion-Lady-Small-Square-Shape-White-Marble-Color-PU-Trifold-Purse.jpg",
                    "desc": "dfdgfdgfhdgfhdgfdhfgdhgfdhfgdhfgdhfgdfdhfgdf"
                }

            ]
        }
    }
    getproduits=()=> {
        axios.get('https//api.gihub.com/users')
            .then(Response => {
                this.setState({
                    Produits: Response.data
                })
            })
    }
    componentDidMount() {
        this.getproduits();
    }
    render() {
        return (
            <div class="container p-3 mt-4">
                <h1 className="text-warning text-center">Products</h1>
                <div class="row">
                    {this.state.produits.map(Produits => (
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="card shadow-lg hover-zoom">
                                <img src={Produits.image} className="card-img-top hover-overlay" alt="" />
                                <div className="card-body">
                                    <p clasNames="card-text" src={Produits.desc}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href={ Produits.html_url }><button className="btn bg-warning">Read more</button></a>
                                </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
            
            )
    }
    }
       
    
export default Produits;