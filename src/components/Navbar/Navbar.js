import React from "react";
import '../../assets/css/Navbar.scss';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";


class Navbar extends React.Component {

    render() {
        return (
            <div className="root">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    <Typography variant="h6" className="title">
                        News
                    </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>




            </div>



        );
    }
}

export default Navbar;
