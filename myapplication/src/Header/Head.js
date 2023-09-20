import React from "react";

class Head extends React.Component {
    constructor() {
        super() 
        this.state = {
            name : 'varma',
            id : 1 ,
            state : 'AP'
        }
    }
    render() {
        return(
            <div>
                <h1> Name:{this.state.name}</h1>
               
            </div>
        )
    }
}
export default Head;