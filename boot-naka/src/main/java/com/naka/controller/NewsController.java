package com.naka.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.naka.db.NewsRepository;
import com.naka.model.News;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "news")
public class NewsController {
	
	@Autowired
	private NewsRepository newsRepository;
	
	@GetMapping("/get")
	public List<News> getNews() {
		return newsRepository.findAll();
	}
	
	@GetMapping("/get/libelle={libelle}") 
	public News getNewsByLibelle(@PathVariable("libelle") String libelle){
		return newsRepository.findNewsByLibelle(libelle);
	}
	
	
	
}
