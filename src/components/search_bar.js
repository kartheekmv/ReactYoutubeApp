import React, {Component} from 'react';

// called class based component
 
// every class should have render method
// class based component has state and function based don't
class SearchBar extends  Component {

    constructor(props){
        super(props);

        //setting the state

        this.state={ term:''};
    }
    render() {
        
        return(
            <div className="search-bar">
             <input 
             value={this.state.term} // controlled input  
             onChange={ event =>  this.onInputChange(event.target.value) } />
             </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
 

}


export default SearchBar;