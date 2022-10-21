package com.ram.nepalidice.repository;

import com.ram.nepalidice.model.Player;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiceRepository extends CrudRepository<Player, String> {
}
