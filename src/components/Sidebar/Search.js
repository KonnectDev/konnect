import React from "react";
import "../../assets/css/Sidebar.scss";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({searchText: e.target.value}, ()=> {
            this.props.searchText(this.state.searchText);
        });
    }

    render() {
        return (
            <div>
                <form className="Search" onSubmit={e =>
                    e.preventDefault()}>
                    <input type="text" className="Search-box"
                           placeholder="Filter Friends..." onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
}

export default Search;
