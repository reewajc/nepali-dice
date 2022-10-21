package com.ram.nepalidice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "dice")
public class Dice {
    @Id
    @Column(name = "id")
    String diceId;

    @Column(name = "dice_face")
    DiceEnum face;

    public String getDiceId() {
        return diceId;
    }

    public void setDiceId(String diceId) {
        this.diceId = diceId;
    }

    public DiceEnum getFace() {
        return face;
    }

    public void setFace(DiceEnum face) {
        this.face = face;
    }

    @Override
    public String toString() {
        return "Dice{" +
                "diceId=" + diceId +
                ", face=" + face +
                '}';
    }

    private Dice(Builder builder) {
        diceId = builder.diceId;
        face = builder.face;
    }


    /**
     * {@code Dice} builder static inner class.
     */
    public static final class Builder {
        private String diceId;
        private DiceEnum face;

        public Builder() {
        }

        public Builder(Dice copy) {
            this.diceId = copy.getDiceId();
            this.face = copy.getFace();
        }

        /**
         * Sets the {@code diceId} and returns a reference to this Builder enabling method chaining.
         *
         * @param diceId the {@code diceId} to set
         * @return a reference to this Builder
         */
        public Builder withDiceId(String diceId) {
            this.diceId = diceId;
            return this;
        }

        /**
         * Sets the {@code face} and returns a reference to this Builder enabling method chaining.
         *
         * @param face the {@code face} to set
         * @return a reference to this Builder
         */
        public Builder withFace(DiceEnum face) {
            this.face = face;
            return this;
        }

        /**
         * Returns a {@code Dice} built from the parameters previously set.
         *
         * @return a {@code Dice} built with parameters of this {@code Dice.Builder}
         */
        public Dice build() {
            return new Dice(this);
        }
    }
}
