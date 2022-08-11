package com.apep.ws.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
