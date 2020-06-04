package com.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.models.UserGroups;

@Repository
public interface ActivityGroupDao extends JpaRepository<UserGroups, Integer>{
//	@Query("select a from activitygroups a where a.group_id = :x")
//	public UserGroups findGroupById(@Param("x") int x);
}
