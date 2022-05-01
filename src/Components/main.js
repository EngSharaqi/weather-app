import React, { Component } from 'react';
import axios from 'axios';
class Main extends Component {
    state = {
        __key: '6e39d882c326431f8f3190906220504',
        __api: `http://api.weatherapi.com/v1/current.json?key=6e39d882c326431f8f3190906220504&q=`,
        __search: 'cairo'
    }

    componentDidMount = ()=>{
        axios.get(this.state.__api + this.state.__search)
        .then(res => {
            console.log(res)
        })
    }

    handleFrom = (e) =>{
    }
    handleInput = (e) =>{
        e.preventDefault();
        this.setState({
            __search: e.target.element.city.value
        })
       
    }
    render(){console.log(this.props.match)
        return( 
            <div>
                <form getWeather={this.handleInput}>
                    <input name='city' />
                    <input type='submit' vlaue='search' />
                </form>
            </div>
        );
    }
}

export default Main;