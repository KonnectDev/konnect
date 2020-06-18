import React from "react";
import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

class GuildHeader extends React.Component {
    render() {
        return (
            <div>
                <Container maxWidth="false" disableGutters={true}>
                    <Typography component="div" style={{backgroundColor: '#43494E', height: '130px'}}>
                        <p style={{
                            textAlign: "center",
                            padding: "50px 50px",
                            color: "#F7F7F8",
                            fontSize: "24px"
                        }}>GuildName</p>
                    </Typography>
                </Container>
            </div>
        );
    }
}


export default GuildHeader;
