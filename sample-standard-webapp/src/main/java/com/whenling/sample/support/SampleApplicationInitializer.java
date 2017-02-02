package com.whenling.sample.support;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.whenling.castle.integration.ApplicationInitializer;
import com.whenling.sample.entity.AdminEntity;
import com.whenling.sample.repo.AdminRepository;

@Component
public class SampleApplicationInitializer extends ApplicationInitializer {

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private AdminRepository adminRepository;

	@Override
	public void onRootContextRefreshed() {
		if (adminRepository.count() == 0) {
			AdminEntity admin = new AdminEntity();
			admin.setName("管理员");
			admin.setUsername("admin");
			admin.setPassword(passwordEncoder.encode("asd123"));
			adminRepository.save(admin);
		}
	}

}
