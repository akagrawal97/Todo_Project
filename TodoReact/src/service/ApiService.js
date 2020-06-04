import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/';

class ApiService {

    registerUser(user) {
        return axios.post(""+USER_API_BASE_URL+"register",user);
    }
    loginUser(user) {
        return axios.post(""+USER_API_BASE_URL+"login", user);
    }
    fetchSession() {
        return axios.get(""+USER_API_BASE_URL+"fetchSession");
    }
    fetchActivityGroups(user){
        return axios.post(""+USER_API_BASE_URL+"fetchActivityGroups",user);
    }
    fetchActivities(gid){
        return axios.post(""+USER_API_BASE_URL+"fetchActivities",gid);
    }
    addNewActivityGroup(newActivityGroup){
        return axios.post(""+USER_API_BASE_URL+"addActivityGroup",newActivityGroup)
    }
    addNewActivity(newActivity){
        return axios.post(""+USER_API_BASE_URL+"addActivity",newActivity)
    }
    updateActivityStatus(activity_id){
        return axios.post(""+USER_API_BASE_URL+"updateActivityStatus",activity_id)
    }
    loginWithGoogle(user){
        return axios.post(""+USER_API_BASE_URL+"registerGoogleUser", user);
    }
    addMember(newGroupMember){
        return axios.post(""+USER_API_BASE_URL+"addMember", newGroupMember);
    }
}

export default new ApiService();