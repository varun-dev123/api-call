import React, { Component } from 'react';

class AppFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-center">@numrik 2019</p>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}
 
export default AppFooter;