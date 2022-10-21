package com.ram.nepalidice.controller;

import com.ram.nepalidice.model.Dice;
import com.ram.nepalidice.model.Player;
import com.ram.nepalidice.repository.DiceRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.management.PlatformLoggingMXBean;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static com.ram.nepalidice.util.DiceUtitlity.generateRandom;
import static com.ram.nepalidice.util.DiceUtitlity.getDiceFace;

@RestController
@CrossOrigin()
@RequestMapping("nepali-dice/v1")
public class DiceController {
    private static final Logger LOGGER = LoggerFactory.getLogger(DiceController.class);

    @Autowired
    private DiceRepository diceRepository;

    @GetMapping("/roll-dice")
    public ResponseEntity<?> rollDice() {

        Dice dice1 = new Dice.Builder().withDiceId("dice1").withFace(getDiceFace(generateRandom())).build();
        Dice dice2 = new Dice.Builder().withDiceId("dice2").withFace(getDiceFace(generateRandom())).build();
        Dice dice3 = new Dice.Builder().withDiceId("dice3").withFace(getDiceFace(generateRandom())).build();
        Dice dice4 = new Dice.Builder().withDiceId("dice4").withFace(getDiceFace(generateRandom())).build();
        Dice dice5 = new Dice.Builder().withDiceId("dice5").withFace(getDiceFace(generateRandom())).build();
        Dice dice6 = new Dice.Builder().withDiceId("dice6").withFace(getDiceFace(generateRandom())).build();

        List<Dice> dices = List.of(dice1, dice2, dice3, dice4, dice5, dice6);

        //Create a map with DiceEnum key and number of faces of Dice as value
       // Map<String, List<Dice>> diceMap = dices.stream().collect(Collectors.groupingBy(Dice::getDiceId));

        return new ResponseEntity<>(dices, HttpStatus.OK);
    }
    //TODO: For now Trying to post the number of players and their bid amount to a dice :)
    @PostMapping("/playTable")
    public ResponseEntity<?> bid(){
        List<Player> players = List.of();
        return ResponseEntity.ok(HttpStatus.OK);
    }

}
