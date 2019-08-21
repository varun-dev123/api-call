import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import About from './about';
import Home from './home';
import Employee from './employee'


class AppContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="mainContent">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Switch>
                                <Route exact path="/" component={Home}  />
                                <Route path="/home" component={Home}  />
                                <Route path="/about" component={About} />
                                <Route path="/employee" component={Employee} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div> 
         );
    }
}
 
export default AppContent;