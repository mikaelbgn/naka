package com.naka.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.naka.db.TypeMediaRepository;
import com.naka.model.TypeMedia;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "type-media")
public class TypeMediaController {
	
	@Autowired
	private TypeMediaRepository typeMediaRepository;
	
	@PostMapping("/add")
	public void createTypeMedia(@RequestBody TypeMedia typeMedia) {
		typeMediaRepository.save(typeMedia);
	}
	
}
