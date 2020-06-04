import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class RegisterComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            emp_id: '',
            password: '',
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {emp_id: this.state.emp_id, password: this.state.password};
        //alert("hello"+user['emp_id']);
        ApiService.registerUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/login');
            });
    }

    sendtoLogin= (e) =>{
        this.props.history.push('/login');
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
                    <h2 className="text-center" style={headingstyle}>Register User</h2>
                    <form>
                    <div className="form-group" style={divstyle}>
                        <label style={tagstyle}>Employee ID:</label><br></br>
                        <input type="text" placeholder="emp_id" name="emp_id" className="form-control" value={this.state.emp_id} onChange={this.onChange} style={textboxstyle}/>
                    </div><br></br>
    
                    <div className="form-group" style={divstyle}>
                        <label style={tagstyle}>Password:</label><br></br>
                        <input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange} style={textboxstyle}/>
                    </div><br></br>
                    <div style={divstyle}>
                        <button className="btn btn-success" onClick={this.saveUser} style={buttonstyle}>Register</button>
                        <button className="btn btn-success" onClick={this.sendtoLogin} style={buttonstyle}>Login</button><br></br>
                    </div>
                </form>
            </div>
            );
            
        }
}

export default RegisterComponent;