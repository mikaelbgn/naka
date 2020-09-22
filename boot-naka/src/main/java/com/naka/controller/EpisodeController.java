package com.naka.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.naka.db.EpisodeRepository;
import com.naka.model.Episode;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "episode")
public class EpisodeController {
	
	@Autowired
	private EpisodeRepository episodeRepository;
	
	@GetMapping("/get")
	public List<Episode> getNews() {
		return episodeRepository.findAll();
	}
	
}
