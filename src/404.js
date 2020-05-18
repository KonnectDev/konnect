import React from "react";
import "./assets/css/404.css";

class Error extends React.Component {
    render() {
        return (
            <div>
                <div className="error">404</div>
                <br/><br/>
                <span className="info">File not found</span>
                <img src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif" className="static"/>
            </div>
        );
    }

}

export default Error;
