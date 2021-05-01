import React, { Component } from 'react';
import axios from 'axios';
class Listeprd extends Component {
    state = {
        listprds :[
            {

                "id": 5,
                "image": "https://th.bing.com/th/id/R541004179881bbb34e29159f5a67a3e5?rik=b0YRmvd1rXbkQA&riu=http%3a%2f%2fwww.bittersweetcolours.com%2fwp-content%2fuploads%2f2013%2f01%2fP10179701.jpg&ehk=PIVpFuaQtVSMGDCpACBtbsiUj3OW%2fm%2bSZeLGbGrwWmw%3d&risl=&pid=ImgRaw",
                "desc": "dfdgfdgfhdgfhd"
            },
            {

                "id": 6,
                "image": "https://th.bing.com/th?id=OIF.Hkj%2bysoB59OMqD5Yla3iEA&pid=ImgDet&rs=1",
                "desc": "dfdgfdgfhdgfhdgfdhfgdhgfdhfgdhfgdhfgdfdhfgdf"
            },
            {

                "id": 7,
                "image": "https://i.pinimg.com/736x/49/33/a8/4933a875979c246318216c801836fa9e.jpg",
                "desc": "dfdgfdgfhdgfhdgfdhfgdhgfdhfgdhfgdhfgdfdhfgdf"
            }
        ]}
    Delete = (index) => {
        const listprds = [...this.state.listprds];
        listprds.splice(index, 1);
        this.setState({ listprds });
    }
    render() {
        return (
            <div>
                <div class="container p-3">
                <h1 class="text-center text-dark pt-4">Listes</h1>
                <div class="row">
                    <div class="col-4">
                    </div>
                    <div class="col-4">
                    </div>
                    <div class="col-4">
                    </div>
                    </div>
                    <div class="row">
                        {this.state.listprds.map((listes, index) => (
                            <div key={ index } className="col-lg-4 col-md-4 col-12">
                            <div className="card shadow-lg hover-zoom">
                                <img src={listes.image} className="card-img-top hover-overlay" alt="" />
                                <div className="card-body">
                                    <p>{listes.id}</p>
                                        <p clasNames="card-text" >{listes.desc}</p>
                                        <button className="btn btn-dark text-light"
                                            onClick={() => { this.Delete(index) }}>delete</button>
                                   
                                </div>
                            </div>
                        </div>
                            ))}
                     </div>
             </div>
         </div>
        )
    }
}
export default Listeprd;