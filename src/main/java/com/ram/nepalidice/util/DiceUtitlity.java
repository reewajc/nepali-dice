package com.ram.nepalidice.util;

import com.ram.nepalidice.model.DiceEnum;

import java.util.Random;

public class DiceUtitlity {

    public static DiceEnum getDiceFace(int num) {
        switch (num) {
            case 1:
                return DiceEnum.DIAMOND;
            case 2:
                return DiceEnum.CLUB;
            case 3:
                return DiceEnum.HEART;
            case 4:
                return DiceEnum.KING;
            case 5:
                return DiceEnum.SPADE;
            case 6:
                return DiceEnum.QUEEN;
            default:
                return null;
        }

    }
    static Random randomGenerator = new Random();
    public static int generateRandom() {
       return randomGenerator.nextInt(6) + 1;
    }
}
