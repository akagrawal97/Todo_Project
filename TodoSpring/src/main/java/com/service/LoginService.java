package com.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;

import com.Dao.ActivitiesDao;
import com.Dao.ActivityGroupDao;
import com.Dao.UserDao;
import com.Dao.User_groupDao;
import com.models.Login_object;
import com.models.NewGroupMember;
import com.models.Register_object;
import com.models.User;
import com.models.UserGroups;
import com.models.UserGroupsObject;
import com.models.activities;
import com.models.activitiesObject;
import com.models.activity_idObject;
import com.models.user_group;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

//@Component("LoginService")
@Service
public class LoginService {
	
	@Autowired
	private UserDao userDao;
	@Autowired
	private ActivityGroupDao activityGroupDao;
	@Autowired
	private User_groupDao user_groupDao;
	@Autowired
	private ActivitiesDao activitiesDao;
	
	public int login(Login_object user) {		
		User newUser = new User();
		newUser.setEmp_id(user.getEmp_id());
		newUser.setPassword(user.getPassword());
		List<User> allusers = new ArrayList<>();
		userDao.findAll().iterator().forEachRemaining(allusers::add);
		int flag=0;
		for(int i=0;i<allusers.size();i++) {
			if(allusers.get(i).getEmp_id().equals(user.getEmp_id()) &&
			   allusers.get(i).getPassword().equals(user.getPassword())) {
				System.out.println("\n login successful \n");
				flag=1;
				break;
			}				
		}
		if(flag==0) {
			System.out.println("\n wrong credentials \n");
			return 0;
		}
		System.out.println("welcome");
		return 1;
	}
	
    public int register(Register_object user) {
		User newUser = new User();
		newUser.setEmp_id(user.getEmp_id());
		newUser.setPassword(user.getPassword());
		System.out.println("\n "+newUser.getEmp_id()+"::::"+newUser.getPassword()+"\n");
		userDao.save(newUser);
		return 1;
		
	}
    public int registerGoogleUser(String user) {
    	user=user.substring(0,user.length()-1);
		boolean exists=userDao.existsById(user);
		if(exists) {
			return 1;
		}
		else {
			User newUser = new User();
			newUser.setEmp_id(user);
			newUser.setPassword("googlePassword");
			System.out.println("\n "+newUser.getEmp_id()+"::::"+newUser.getPassword()+"\n");
			userDao.save(newUser);
			return 1;			
		}
	}
    public ArrayList<UserGroups> fetchActivityGroups(String user) {
    	ArrayList<user_group> list1 = new ArrayList<user_group>(); 
    	user_groupDao.findAll().iterator().forEachRemaining(list1::add);
    	ArrayList<UserGroups> list2 = new ArrayList<>();
    	for(int i=0;i<list1.size();i++) {
    		if(list1.get(i).getEmp_id().equals(user)) {  
    			Optional<UserGroups> userGroups=activityGroupDao.findById(list1.get(i).getGroup_id());
    			UserGroups ug=new UserGroups();
    			ug=userGroups.get();
    			list2.add(ug);
    		}
    	}
    	return list2;  	
    }
    public void addGroup(UserGroupsObject activityGroup) {
    	UserGroups newActivityGroup = new UserGroups();
    	newActivityGroup.setGroup_name(activityGroup.getGroup_name());
    	newActivityGroup.setRemarks(activityGroup.getRemarks());
    	UserGroups UG=activityGroupDao.save(newActivityGroup);
    	System.out.println("emp_id: "+activityGroup.getEmp_id()+
    						"group_id: "+UG.getGroup_id());
    	
    	user_group ug = new user_group();
    	ug.setEmp_id(activityGroup.getEmp_id());
    	ug.setGroup_id(UG.getGroup_id());
    	user_groupDao.save(ug);
    }
    public void addActivity(activitiesObject newactivity) {
    	activities newActivity = new activities();
    	newActivity.setActivity_name(newactivity.getActivity_name());
    	newActivity.setActivity_description(newactivity.getActivity_description());
    	newActivity.setIsCompleted(false);
    	newActivity.setGroup_id(newactivity.getGroup_id());
    	
    	activitiesDao.save(newActivity);
    }
    public ArrayList<activities> fetchActivities(String gid) {
    	ArrayList<activities> list1 = new ArrayList<>(); 
    	activitiesDao.findAll().iterator().forEachRemaining(list1::add);
    	ArrayList<activities> list2 = new ArrayList<>();
    	for(int i=0;i<list1.size();i++) {
    		if(list1.get(i).getGroup_id().equals(gid)) {
    			//System.out.println(list1.get(i).getGroup_id());
    			activities act=list1.get(i);
    			System.out.println(String.valueOf(act.getIsCompleted()));
    			boolean completed=String.valueOf(act.getIsCompleted()).equals("true")?true:false;
    			act.setIsCompleted(completed);
    			list2.add(act);
    		}
    	}
    	return list2;  	
    }

	public void updateActivityStatus(activity_idObject aid) {
		//ArrayList<activities> acts=new LoginService().fetchActivities(aid.getGroup_id());
		ArrayList<activities> list1 = new ArrayList<>(); 
    	activitiesDao.findAll().iterator().forEachRemaining(list1::add);
    	ArrayList<activities> list2 = new ArrayList<>();
    	activities act=new activities();
    	boolean completed;
    	for(int i=0;i<list1.size();i++) {
    		if(list1.get(i).getGroup_id().equals(aid.getGroup_id()) &&
    		   list1.get(i).getId()==aid.getAct_id()) {
    			//System.out.println(list1.get(i).getGroup_id());
    			act=list1.get(i);
    			//System.out.println(String.valueOf(act.getIsCompleted()));
    			completed=String.valueOf(act.getIsCompleted()).equals("true")?false:true;
    			act.setIsCompleted(completed);
    			break;
    		}
    	}
    	activitiesDao.save(act);
	}
	public void addMember(NewGroupMember newGroupMember) {
    	user_group ug = new user_group();
    	ug.setEmp_id(newGroupMember.getUserid());
    	ug.setGroup_id(newGroupMember.getGroup_id());
    	user_groupDao.save(ug);
    }
}
