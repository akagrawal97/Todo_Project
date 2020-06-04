package com.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="todoactivities")
@SequenceGenerator(name="seq2", initialValue=1000, allocationSize=100000)
public class activities {
	
	@Id
	@GeneratedValue(strategy= GenerationType.SEQUENCE,generator="seq2")
	private int id;
	
	@Column(name="group_id")
	private String group_id;
	
	@Column(name="activity_name")
	private String activity_name;
	
	@Column(name="activity_description")
	private String activity_description;
	
	@Column(name="isCompleted")
	private boolean isCompleted;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getGroup_id() {
		return group_id;
	}

	public void setGroup_id(String group_id) {
		this.group_id = group_id;
	}

	public String getActivity_name() {
		return activity_name;
	}

	public void setActivity_name(String activity_name) {
		this.activity_name = activity_name;
	}

	public String getActivity_description() {
		return activity_description;
	}

	public void setActivity_description(String activity_description) {
		this.activity_description = activity_description;
	}

	public boolean getIsCompleted() {
		return isCompleted;
	}

	public void setIsCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}	
}
