import React from "react";
import  {
    BrowserRouter as Router,
    Link,
    Route,
    NavLink
} from "react-router-dom";



class Navbar extends React.Component {

    render() {
        return (
            <div>
                <NavLink to="/Dashboard/test">
                    Home
                </NavLink>
                <NavLink to="/Dashboard/test">
                    Achievements
                </NavLink>
                <NavLink to="/Dashboard/test">
                    Guild
                </NavLink>
                <NavLink to="/Dashboard/test">
                    Settings
                </NavLink>
                <NavLink to="/Dashboard/test">
                    Messages
                </NavLink>



            </div>



        );
    }
}

export default Navbar;
