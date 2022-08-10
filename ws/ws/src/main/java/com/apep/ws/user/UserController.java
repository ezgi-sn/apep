package com.apep.ws.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class UserController {
	
	
	@Autowired
	IUserRepo userRepo;
	
	@PostMapping("/api/1.0/users")
	public void createUser(@RequestBody User user) {
		userRepo.save(user);
	}
}
