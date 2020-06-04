import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddActivityComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            group_id:this.props.location.state.gid,
            activity_name:'',
            activity_description:''
        }
        this.addNewActivity = this.addNewActivity.bind(this);
        console.log("gid in AddActivityComponent: ")
        console.log(this.props.location.state.gid)
    }

    addNewActivity = (e) => {
        e.preventDefault();
        let newActivity = {
            group_id: this.props.location.state.gid,
            activity_name:this.state.activity_name,
            activity_description:this.state.activity_description
        };
        ApiService.addNewActivity(newActivity)
            .then(res => {
                this.props.history.push('/activity',{gid:this.props.location.state.gid});
            });
    }
    sendback= (e) =>{
        this.props.history.push('/activity',{gid:this.props.location.state.gid});
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
            top: "0",bottom: "0",left: "0",right: "0",margin: "auto",
            width:"100%",
            height:"100%"
        }
        return(
            <div style={framestyle}>
                <h2 className="text-center" style={headingstyle}>Add New Activity</h2>
                <form style={divstyle}>
                <div className="form-group" style={divstyle}>
                    <label style={tagstyle}>Activity Name:</label><br></br>
                    <input type="text" placeholder="Activity Name" name="activity_name" className="form-control" value={this.state.activity_name} onChange={this.onChange} style={textboxstyle}/>
                </div><br></br>

                <div className="form-group" style={divstyle}>
                    <label style={tagstyle}>Activity Description:</label><br></br>
                    <input type="text" placeholder="Activity Description" name="activity_description" className="form-control" value={this.state.activity_description} onChange={this.onChange} style={textboxstyle}/>
                </div><br></br>
                <div style={divstyle}>
                    <button className="btn btn-success" onClick={this.addNewActivity} style={buttonstyle}>Save</button>
                    <button className="btn btn-success" onClick={this.sendback} style={buttonstyle}>Cancel</button><br></br>
                </div>                
            </form>
        </div>
        );
        
    }
}

export default AddActivityComponent;