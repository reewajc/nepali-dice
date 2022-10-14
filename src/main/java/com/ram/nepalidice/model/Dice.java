package com.ram.nepalidice.model;

public class Dice {
    DiceEnum face;

    private Dice(Builder builder) {
        setFace(builder.face);
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
                "face=" + face +
                '}';
    }

    /**
     * {@code Dice} builder static inner class.
     */
    public static final class Builder {
        private DiceEnum face;

        public Builder() {
        }

        public Builder(Dice copy) {
            this.face = copy.getFace();
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
