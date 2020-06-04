package com.ak;

import java.util.ArrayList;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.models.ApiResponse;
import com.models.Login_object;
import com.models.NewGroupMember;
import com.models.Register_object;
import com.models.User;
import com.models.UserGroups;
import com.models.UserGroupsObject;
import com.models.UserIdObject;
import com.models.activities;
import com.models.activitiesObject;
import com.models.activity_idObject;
import com.models.group_idObject;
import com.service.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class AppController {
	@Autowired
	private LoginService serv ;
	
	@PostMapping(path="/login")
	public ApiResponse<User> login(@RequestBody Login_object user ) {
		return new ApiResponse<>(HttpStatus.OK.value(), "User Login successful.",serv.login(user));
	}
	@PostMapping(path="/register")
	public ApiResponse<User> register(@RequestBody Register_object user){		
        return new ApiResponse<>(HttpStatus.OK.value(), "User saved successfully.",serv.register(user));
    }
	@PostMapping(path="/registerGoogleUser")
	public ApiResponse<User> registerGoogleUser(@RequestBody String user){		
        return new ApiResponse<>(HttpStatus.OK.value(), "User saved successfully.",serv.registerGoogleUser(user));
    }
	@PostMapping(path="/fetchActivityGroups")
	public ArrayList<UserGroups> fetchActivityGroups(@RequestBody UserIdObject user){
		 return(serv.fetchActivityGroups(user.getEmp_id()));
    }
	@PostMapping(path="/addActivityGroup")
	public void addActivityGroup(@RequestBody UserGroupsObject newgroup) {
		serv.addGroup(newgroup);
    }
	@PostMapping(path="/addActivity")
	public void addActivity(@RequestBody activitiesObject newactivity) {
		serv.addActivity(newactivity);
    }
	@PostMapping(path="/fetchActivities")
	public ArrayList<activities> fetchActivities(@RequestBody group_idObject gid){
		//System.out.println("received group_id: "+gid.getGroup_id());
		 return(serv.fetchActivities(gid.getGroup_id()));		 
    }
	@PostMapping(path="/updateActivityStatus")
	public void updateActivityStatus(@RequestBody activity_idObject aid){
		//System.out.println("received group_id: "+gid.getGroup_id());
		 serv.updateActivityStatus(aid);		 
    }
	@PostMapping(path="/addMember")
	public void addMember(@RequestBody NewGroupMember newGroupMember) {
		serv.addMember(newGroupMember);
    }
}
