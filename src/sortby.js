import React, {Component} from 'react';

class Sortby extends Component{
    render(){
        return(
            <button type="button" class="btn btn-outline-warning btn-sm">{this.props.sortby}</button>
        )
    }
}
export default Sortby;