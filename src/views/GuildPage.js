import React from "react";
import {Route, Switch} from "react-router-dom";
import GuildHeader from '../components/Guild/GuildHeader';
import GuildNavbar from "../components/Guild/GuildNavbar";
import Guildroutes from "../Guildroutes";


class GuildPage extends React.Component {

    getRoutes = Guildroutes => {
        return Guildroutes.map((prop, key) => {
            if (prop.layout === "/Dashboard/guild") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        render={props => (
                            <prop.component
                                {...props}
                            />
                        )}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };

    render() {
        return (
            <div>
                <GuildHeader/>
                <GuildNavbar
                    {...this.props}
                />
                <Switch>
                    {this.getRoutes(Guildroutes)}
                </Switch>


            </div>
        );
    }
}


export default GuildPage;
