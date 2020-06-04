import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class WelcomeComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            uid: "aaaa",
            message: null
        }
        
    }
    componentDidMount() {
        console.log("props:\n");
        console.log(this.props);
        this.setState({uid:this.props.location.state.uid})
    }
    render() {        
        return(
            <div>
                {this.state.uid}
            </div>
        );       
    }
}

export default WelcomeComponent;