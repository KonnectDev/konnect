import React from "react";
import "../../assets/css/Sidebar.scss";

class SearchGuild extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchGuild: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({searchGuild: e.target.value}, ()=> {
            this.props.searchGuild(this.state.searchGuild);
        });
    }

    render() {
        return (
            <div>
                <form className="Search" onSubmit={e =>
                    e.preventDefault()}>
                    <input type="text" className="Search-box"
                           placeholder="Filter Guild Members..." onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
}

export default SearchGuild;
