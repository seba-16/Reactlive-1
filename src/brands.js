import React, {Component} from 'react';

class Brands extends Component{
    render(){
        return(
        <button type="button" class="btn btn-outline-success btn-sm">{this.props.brands}</button>
        )
    }
}
export default Brands;