import { Component } from 'react';
import './index.css'

class DestinationSearch extends Component {
    state = {
        searchInput: '',
    }

    serchInputValue = event => {
        this.setState({searchInput: event.target.value});
    };

    render(){
        const {destinationList} = this.props
        const {searchInput} = this.state
        
        const filteredDestinations = destinationList.filter(destination => destination.name.toLowerCase().includes(searchInput.value.toLowerCase()))

        return(
            <div>
                <h1>Destination Search</h1>
                <input
                type="search"
                onChange={this.serchInputValue}
                placeholder="Search"/>
                <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" 
                alt="search icon"/>
                <ul>
                    {filteredDestinations.map(destination => (
                        <li key= {destination.id}>
                            <img src={destination.imgUrl} alt={destination.name}/>
                            <p>{destination.name}</p>
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
}
export default DestinationSearch