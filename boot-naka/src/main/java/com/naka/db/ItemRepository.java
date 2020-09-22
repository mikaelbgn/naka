package com.naka.db;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.naka.model.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {
	
	@Query(value="SELECT * FROM item i WHERE i.episode_id = (SELECT e.numero FROM episode e WHERE e.id = :id)", nativeQuery = true)
	public List<Item> findItemsByEpisode(@Param("id") String idEpisode);
	
}
