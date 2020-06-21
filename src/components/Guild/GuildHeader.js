import React from "react";
import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import koin from "../../assets/img/Konnect_koin.svg";

class GuildHeader extends React.Component {
    render() {
        return (
            <div>
                <Container maxWidth="false" disableGutters={true}>
                    <Typography component="div" style={{
                        backgroundColor: '#43494E',
                        height: '160px',
                        textAlign: "center",
                        padding: "30px 30px",
                        color: "#F7F7F8",
                    }}>
                        <img src={koin} style={{width: "5%"}}/>
                        <p style={{
                            fontSize: "24px"
                        }}>GuildName</p>
                    </Typography>
                </Container>
            </div>
        );
    }
}


export default GuildHeader;
