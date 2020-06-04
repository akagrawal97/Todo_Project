package com.models;

import javax.persistence.EntityManager;

import org.springframework.data.jpa.provider.PersistenceProvider;
import org.springframework.data.jpa.repository.support.JpaEntityInformation;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.util.Assert;

public class SimpleJpaRepo_Extn<T, ID> extends SimpleJpaRepository<T, ID>{
	SimpleJpaRepo_Extn(JpaEntityInformation<T, ?> entityInformation, EntityManager entityManager){
		super(entityInformation, entityManager);
	}

}
