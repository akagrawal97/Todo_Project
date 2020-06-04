import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ActivityComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            group_id: '',
            activities: []            
        }
        // this.fetchActivities = this.fetchActivities.bind(this);
        // this.addActivity = this.addActivity.bind(this);
    }

    componentDidMount() {        
        this.setState({group_id:this.props.location.state.gid});
        this.fetchActivities();
    }

    fetchActivities = (e) => {
        const gid={group_id:this.props.location.state.gid}
        console.log("gid in ActivityComponent fetchActivities: ")
        console.log(this.props.location.state.gid)
        ApiService.fetchActivities(gid)
            .then(res => {
                this.setState({activities:res.data});
                console.log("activities:")
                console.log(res.data)
                console.log("state variable:")
                console.log(this.state)
            });
    }

    addActivity = (e)=>{
        console.log("gid in ActivityComponent: ")
        console.log(this.props.location.state.gid)
        this.props.history.push('/addactivity',
            {
                gid:this.props.location.state.gid,
                uid:this.props.location.state.uid
            }
        );
    }

    addMember = (e)=>{
        this.props.history.push('/addnewmember',
            {
                gid:this.props.location.state.gid,
                uid:this.props.location.state.uid
            }
        );
    }

    goback = (e)=>{
        this.props.history.push('/activitygroups',{uid:this.props.location.state.uid});
    }

    toggleTick= (act_id,isCompleted)=>{
        if(window.confirm("are u sure to change it?")){
            const activity_id={
                act_id:act_id,
                group_id:this.props.location.state.gid
            }
            ApiService.updateActivityStatus(activity_id)
                .then(res=>{
                    this.props.history.push('/activity',
                    {
                        gid:this.props.location.state.gid,
                        uid:this.props.location.state.uid
                    });
                })
        }
        else{
            document.getElementById("check_box").checked={isCompleted};
        }        
    }

    render() {
        const tabstyle={
            color:"white",
            //border:"1px solid white",
            borderCollapse: "collapse",
            padding:"10px",
            top: "0",bottom: "0",left: "0",right: "0",margin: "auto",
        }
        const framestyle={
            alignment:"center",
            textAlign:"center",
            padding: '30px',
            display:"inline-block",
            position:"fixed",
            top: "0",bottom: "0",left: "0",right: "0",margin: "auto",
            // overflow:"scroll"
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
            //width:"300px",
            height:"450px",
            top: "0",bottom: "0",left: "0",right: "0",margin: "auto",
            overflowY:"scroll",overflowX:"hidden",
            //border:"1px solid white"            
        }
        const buttondiv={
            position:"relative",
            // width:"200px",
            top: "10px",bottom: "0",left: "0",right: "0",margin: "auto",
            //border:"1px solid white"
        }
        const colhead={
            padding:"10px",
            color:"#32a852",
            fontSize:"23px",
            borderBottom:"1px solid white",
            margin:"3px"
        }
        const colbody={
            padding:"10px",
            color:"#bfbfbf",
            fontSize:"15px",
           // borderBottom:"1px solid white",
            margin:"3px",
            width:"50px"
        }
        let index=0;
        return(
            <div style={framestyle}>
                <h1 style={hstyle}>Your Activities</h1>
                <div style={newdiv}>
                    <table style={tabstyle}>
                        <thead>
                            <td style={colhead}>S.N</td>
                            <td style={colhead}>Activity Name</td>
                            <td style={colhead}>Activity Description</td>
                            <td style={colhead}></td>
                        </thead>
                        <tbody>
                            <tr>
                                <td> </td><td> </td><td> </td><td> </td>
                            </tr>
                            {this.state.activities.map(activity=>
                            <tr style={tabstyle} key={activity.id}>
                                <td style={colbody}>{++index}.</td>
                                {/* <td>{activity.id}</td> */}
                                <td style={colbody}>{activity.activity_name}</td>
                                <td style={colbody}>{activity.activity_description}</td>
                                <td style={colbody}><input type="checkbox" id="check_box" onClick={() => this.toggleTick(activity.id,activity.isCompleted)} defaultChecked={activity.isCompleted}></input></td>
                                {/* <td>{activity.isCompleted}</td> */}
                            </tr>)}
                        </tbody>
                    </table>
                </div>
                <div style={buttondiv}>
                    <button onClick={this.addActivity} style={buttonstyle}>Add New</button>
                    <button onClick={this.addMember} style={buttonstyle}>Add New member</button>
                    <button onClick={this.goback} style={buttonstyle}>Back</button>
                    {/* <button onClick={this.gotogroups} style={buttonstyle}>Back</button> */}
                </div>
                
            </div>
        );
        
    }
}

export default ActivityComponent;