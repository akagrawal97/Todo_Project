import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import {GoogleLogin} from 'react-google-login';

class LoginComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            emp_id: '',
            password: '',
            message: null
        }
        this.loginUser = this.loginUser.bind(this);
    }

    loginUser = (e) => {
        let user = {emp_id: this.state.emp_id, password: this.state.password};
        ApiService.loginUser(user)
            .then(res => {
                console.log("res in loginpage from apiresponse:")
                console.log(res.result)
                if(res.data.result===1)
                this.props.history.push('/blankpage',{uid:user.emp_id});
                else
                this.popError();
            });
    }
    popError= (result) =>{
        alert("wrong login credential");
        console.log(result)
    }

    sendtoRegister= (e) =>{
        this.props.history.push('/register');
    }

    loginWithGoogle = (response) =>{
        ApiService.loginWithGoogle(response.profileObj.googleId)
            .then(res => {
                this.props.history.push('/activitygroups',{uid:response.profileObj.googleId});
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        const buttonstyle={
            margin: "10px",
            color: "white",
            backgroundColor: "#4CAF50",
            border:"1px",
            padding:"8px",
            fontSize:"18px",
            borderRadius: "5px"
        }
        const textboxstyle={
            color: "black",
            backgroundColor: "white",
            border:"2px solid green",
            padding:"3px",
            borderRadius:"5px",
            margin:"10px",
            fontSize:"17px",
        }
        const headingstyle={
            color:"white",
            fontSize:"30px",
            margin:"10px"
        }
        const tagstyle={
            color:"white",
            fontSize:"20px",
            margin:"10px"
        }
        const divstyle={
            textAlign:"left",
            //border:"1px solid black",
            padding: '10px',
            marginTop: '10px',
            marginBottom: '0px',
            display:"inline-block"
        }
        const framestyle={
            alignment:"center",
            textAlign:"center",
            //border:"1px solid black",
            padding: '30px',
            // margin: '10px',
            display:"inline-block",
            position:"fixed",
            top: "0",bottom: "0",left: "0",right: "0",margin: "auto"
        }
        return(
            <div style={framestyle}>
                <h2 style={headingstyle}>Login User</h2>
                <form>
                <div style={divstyle}>
                    <label style={tagstyle}>Employee ID:</label><br></br>
                    <input type="text" placeholder="emp_id" name="emp_id" value={this.state.emp_id} onChange={this.onChange} style={textboxstyle}/>
                </div><br></br>

                <div style={divstyle}>
                    <label style={tagstyle}>Password:</label><br></br>
                    <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} style={textboxstyle}/>
                </div><br></br>
                <div style={divstyle}>
                    <button onClick={this.loginUser} style={buttonstyle}>Login</button>
                    <button onClick={this.sendtoRegister} style={buttonstyle}>Go to Register</button>
                    
                    <GoogleLogin
                        clientId="715588840715-9o9htfv5m9tlm5ekadfvruu4dnh1i9l6.apps.googleusercontent.com"
                        buttonText=""
                        onSuccess={this.loginWithGoogle}
                        //onSuccess={this.responseGoogle}
                        onFailure={this.popError}
                    />
                </div>                
                </form>
            </div>
        );        
    }
}

export default LoginComponent;