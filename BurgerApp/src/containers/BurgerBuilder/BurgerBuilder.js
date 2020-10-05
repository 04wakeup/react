import React, { Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';

// const { Component } = require("react");

class BurgerBuilder extends Component{
    render(){
        return (
            <Auxiliary>
                <div>Burger</div>
                <div>Build Controls</div>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;