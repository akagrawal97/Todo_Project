package com.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="user_groups")
@SequenceGenerator(name="seq", initialValue=1000, allocationSize=100000)
public class user_group {
	
	@Id
	@GeneratedValue(strategy= GenerationType.SEQUENCE,generator="seq")
	private long id;
	
	@Column(name="emp_id")
	private String emp_id;
	
	@Column(name="group_id")
	private int group_id;
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	public String getEmp_id() {
		return emp_id;
	}
	
	public void setEmp_id(String emp_id) {
		this.emp_id = emp_id;
	}
	
	public int getGroup_id() {
		return group_id;
	}
	
	public void setGroup_id(int group_id) {
		this.group_id = group_id;
	}
	
}
