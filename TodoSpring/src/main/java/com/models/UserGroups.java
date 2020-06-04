package com.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="activitygroups")
@SequenceGenerator(name="seq", initialValue=1000, allocationSize=100000)
public class UserGroups {
	
	@Id
	@GeneratedValue(strategy= GenerationType.SEQUENCE,generator="seq")
	private int group_id;
//	@Column(name="emp_id")
//	private String emp_id;
	@Column(name="group_name")
	private String group_name;
	@Column(name="remarks")
	private String remarks;
	
	public int getGroup_id() {
		return group_id;
	}
	public void setGroup_id(int group_id) {
		this.group_id = group_id;
	}
//	public String getEmp_id() {
//		return emp_id;
//	}
//	public void setEmp_id(String emp_id) {
//		this.emp_id = emp_id;
//	}
	public String getGroup_name() {
		return group_name;
	}
	public void setGroup_name(String group_name) {
		this.group_name = group_name;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	
}
