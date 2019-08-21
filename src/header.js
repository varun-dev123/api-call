import React, { Component } from 'react';
import {Link} from "react-router-dom"

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h4><Link to="" className="">Numrik</Link></h4>
                        </div>
                        <div className="col-md-8">
                            <nav>
                                <ul className="nav-list">
                                    <li className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>
                                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                                    <li className="nav-item"><Link to="/employee" className="nav-link">Employee</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default AppHeader;