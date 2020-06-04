import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import GotoActivity from "../CustomComponents/GotoActivity"

class ActivityGroupsComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            emp_id: this.props.location.state.uid,
            groups: [],
            message: null
        }
         this.fetchActivityGroups = this.fetchActivityGroups.bind(this);
         this.addActivityGroup = this.addActivityGroup.bind(this);
    }

    componentDidMount() {
        console.log("successfully reached Activity Groups")
        this.fetchActivityGroups();
    }

    fetchActivityGroups = (e) => {
        let user = {emp_id:this.state.emp_id};
        ApiService.fetchActivityGroups(user)
            .then(res => {
                this.setState({groups:res.data});
            });
    }

    addActivityGroup = (e)=>{
        this.props.history.push('/addActivityGroup',{uid:this.state.emp_id});
    }

    // goback = (e)=>{
    //     this.props.history.push('/login');
    // }

    render() {
        const tabstyle={
            color:"white",
            //border:"1px solid white",
            borderCollapse: "collapse",
            //padding:"10px"
            top: "0",bottom: "0",left: "0",right: "0",margin: "auto",
        }
        const framestyle={
            alignment:"center",
            textAlign:"center",
            padding: '30px',
            display:"inline-block",
            position:"fixed",
            top: "0",bottom: "0",left: "0",right: "0",margin: "auto",
            //overflow:"scroll"
        }
        const buttonstyle={
            margin: "10px",
            color: "white",
            backgroundColor: "#4CAF50",
            border:"1px",
            padding:"8px",
            fontSize:"18px",
            borderRadius: "5px"
        }
        const hstyle={
            color:"white"
        }
        const newdiv={
            position:"relative",
            width:"300px",
            height:"450px",
            top: "0",bottom: "0",left: "0",right: "0",margin: "auto",
            overflowY:"scroll",overflowX:"hidden",
            //border:"1px solid white"            
        }
        const buttondiv={
            position:"relative",
            // width:"200px",
            top: "5px",bottom: "0",left: "0",right: "0",margin: "auto",
            //border:"1px solid white"
        }
        return(
            <div style={framestyle}>
                <h1 style={hstyle}>Your Activity Groups</h1>
                <div style={newdiv}>
                    <table style={tabstyle}>
                        <thead></thead>
                        <tbody>
                            {this.state.groups.map(group=>
                            <tr key={group.group_id} style={tabstyle}>                             
                                <GotoActivity Group={group} userid={this.state.emp_id}/>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
                <div style={buttondiv}>
                    <button onClick={this.addActivityGroup} style={buttonstyle}>Add New</button>
                    {/* <button onClick={this.goback} style={buttonstyle}>Back</button> */}
                </div>
            </div>
        );
        
    }
}

export default ActivityGroupsComponent;