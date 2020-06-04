package com.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.models.activities;

public interface ActivitiesDao extends JpaRepository<activities,Integer>{
	
}
