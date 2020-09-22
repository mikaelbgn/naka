package com.naka.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.naka.db.ItemRepository;
import com.naka.model.Item;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "items")
public class ItemController {
	
	@Autowired
	private ItemRepository itemRepository;
	
	@GetMapping("/get")
	public List<Item> getNews() {
		return itemRepository.findAll();
	}
	
	@GetMapping("/get/episode={numero}") 
	public List<Item> getItemsParNumeroEpisode (@PathVariable("numero") String numero){
		return itemRepository.findItemsByEpisode(numero);
	}
	
}
