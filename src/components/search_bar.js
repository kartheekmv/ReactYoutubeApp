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
            <div>
             <input 
             value={this.state.term} // controlled input  
             onChange={ event => this.setState({ term: event.target.value}) } />
             </div>
        );
    }
 

}


export default SearchBar;