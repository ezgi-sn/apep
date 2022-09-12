package com.apep.ws.user;


import org.apache.commons.logging.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.Console;

@Service
public class UserService {
	@Autowired
	IUserRepo userRepo;

	public UserService(IUserRepo userRepo) {
		this.userRepo = userRepo;
	}


	public void save(User user) {
		// TODO Auto-generated method stub

		userRepo.save(user);
	}
}
