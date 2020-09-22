package com.naka.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.naka.model.Episode;

public interface EpisodeRepository extends JpaRepository<Episode, Long> {
	
	
	
}
