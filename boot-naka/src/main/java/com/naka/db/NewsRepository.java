package com.naka.db;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.naka.model.News;

public interface NewsRepository extends JpaRepository<News, Long> {
	
	@Query("SELECT n FROM News n WHERE n.libelle = :libelle")
	News findNewsByLibelle(@Param("libelle") String libelle);
	
}
