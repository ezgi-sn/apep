package com.apep.ws.user;

import com.apep.ws.Error.ApiError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;


@RestController
public class UserController {
	
	
	@Autowired
	UserService userService;
	
	@PostMapping("/api/1.0/users")
	public ResponseEntity<?> createUser(@RequestBody User user) {
		String username=user.getUsername();
		if(username==null|| username.isEmpty()){
			ApiError apiError=new ApiError(400,"Validation error","/api/1.0/users");
			Map<String, String> validationErrors= new HashMap<>();
			validationErrors.put("username","Username cannot be null");
			apiError.setValidationErrors(validationErrors);
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(apiError);
		}
		userService.save(user);
		return ResponseEntity.ok(new GenericResponse("user created successfully"));
	}
}
