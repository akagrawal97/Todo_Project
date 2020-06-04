import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddMemberComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            userid: ''
        }
    }

    onChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value });
    }

    addMember = (e) =>{
        const newGroupMember={
            userid:this.state.userid,
            group_id:this.props.location.state.gid
        }
        ApiService.addMember(newGroupMember)
            .then(
                    this.props.history.push('/activity',
                    {
                        gid:this.props.location.state.gid,
                        uid:this.props.location.state.uid
                    }
                )
            );
    }

    goback = (e)=>{
        this.props.history.push('/activity',
            {
                gid:this.props.location.state.gid,
                uid:this.props.location.state.uid
            }
        );
    }

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
                <h2 className="text-center" style={headingstyle}>Add Memer to the group</h2>
                <form>
                    <div className="form-group" style={divstyle}>
                        <label style={tagstyle}>e-mail id:</label><br></br>
                        <input type="text" placeholder="e-mail id" name="userid" className="form-control" value={this.state.userid} onChange={this.onChange} style={textboxstyle}/>
                    </div><br></br>

                    <div style={divstyle}>
                        <button className="btn btn-success" onClick={this.addMember} style={buttonstyle}>Add</button>
                        <button className="btn btn-success" onClick={this.goback} style={buttonstyle}>Back</button><br></br>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddMemberComponent;