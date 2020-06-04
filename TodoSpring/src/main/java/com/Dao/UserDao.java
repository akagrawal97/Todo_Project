package com.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.models.User;

@Repository
public interface UserDao extends JpaRepository<User, String>{

}
