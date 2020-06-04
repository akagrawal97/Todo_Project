import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class GotoActivity extends Component{
	constructor(props){
        super(props);
        this.state ={
            group:this.props.Group
        }
		this.gotoactivity = this.gotoactivity.bind(this);		
	}

	gotoactivity=(e)=>{
		var {history} = this.props;
		history.push('/activity',
			{
				gid:this.props.Group.group_id,
				uid:this.props.userid
			}
		);
	}

    render(){
        const style1={
			//backgroundColor:"white",
			position:"relative",
			left: "0",right: "0",
			color:"white",
        }
        const divmain={
			width:"205px",
			border: "1px solid white",
			display: "flex",
			borderRadius:"10px",
			padding:"3px"
		}
		const divicon={
			height: "50px",
			width: "50px",
			border: "1px solid black",
			padding: "3px",
			borderRadius:"10px",
			backgroundColor:"#03bafc"
		}
		const divname={
            height: "50px",
			width: "150px",
			border: "1px",
			padding: "3px",
			backgroundColor:"rgb(56, 55, 55)",
			float: "left",
			color:"white"			
		}
		const a={
			textDecoration: "none",
			color:"white",
			marginLeft: "5px",
		}
		const img={
			height:"40px",
			width: "40px",
			margin:"4px",
			borderRadius: "50px"
		}
        return(
            <td style={style1}>
                <div style={divmain}>
                    <div style={divicon}>
                        <img src="logo192.png" alt="icon" style={img}/>
                    </div>
                    <div style={divname}>
						<p onClick={this.gotoactivity} style={a} >{this.state.group.group_name}</p>
                    </div>
                </div>
            </td>
        )
    }
}

export default withRouter(GotoActivity);