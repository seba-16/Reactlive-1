import React, {Component} from 'react';
import Brands from './brands';

class Filter extends Component{
    render(){
        return(
            <div>
                <form className="mt-5 p-l-50px">
                    <div class="form">
                        <h3>Search</h3>
                        <input type="" class="form-control" placeholder="Search" ></input>
                    </div>
                    <br></br>
                    <button type="submit" class="btn btn-primary" value="Submit">Search</button>
                </form>
                <br></br>
                <div>
                    <h3>Brands</h3>
                    <span><Brands brands="Iphone"/></span>&nbsp;&nbsp;&nbsp;
                    <span><Brands brands="Oneplus"/></span>&nbsp;&nbsp;&nbsp;
                    <span><Brands brands="Redmi"/></span>&nbsp;&nbsp;&nbsp;                   
                    <span><Brands brands="Oppo"/></span>&nbsp;&nbsp;&nbsp;
                    <span><Brands brands="Vivo"/></span>&nbsp;&nbsp;&nbsp;
                    <span><Brands brands="Realme"/></span>&nbsp;&nbsp;&nbsp;
                    <span><Brands brands="Mi"/></span>&nbsp;&nbsp;&nbsp;
                </div>
                <br></br>
                <form class="slidecontainer">
                    <p><h4>Select Range</h4></p>
                    <input type="range" class="custom-range" min="0" max="5" step="0.5" id="customRange3"></input>
                </form>               
            </div>            
        )
    }
}

export default Filter;
