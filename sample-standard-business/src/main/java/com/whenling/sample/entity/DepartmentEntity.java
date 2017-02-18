package com.whenling.sample.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.whenling.castle.repo.jpa.HierarchicalEntity;

@Entity
@Table(name = "sys_menu_item")
public class DepartmentEntity extends HierarchicalEntity<AdminEntity, Long, DepartmentEntity> {

	private static final long serialVersionUID = -919944153679576971L;

	private String name;
	private String phone;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

}
