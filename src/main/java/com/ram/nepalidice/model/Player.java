package com.ram.nepalidice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Table(name = "player")
public class Player {

    @Id
    @Column(name = "player_id")
    private String playerId;

    @Column(name = "player_name")
    private String playerName;

    @Column(name = "bid_amount")
    private BidEnum bidAmount;

    @Column(name = "bid_dice_enum")
    private DiceEnum biddingDiceEnum;

    @Column(name = "total_player_now")
    private Integer totalPlayerForThisRun;

    @Column(name = "status_indicator")
    private boolean statusWin;

    @Column(name = "result")
    private String result;

    @Column(name = "result_amount")
    private Integer resultAmount;

    @Column(name = "withdraw_status")
    private boolean withdrawStatus;

    @Column(name = "withdraw_amount")
    private Integer withdrawAmount;

    public String getPlayerId() {
        return playerId;
    }

    public void setPlayerId(String playerId) {
        this.playerId = playerId;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public BidEnum getBidAmount() {
        return bidAmount;
    }

    public void setBidAmount(BidEnum bidAmount) {
        this.bidAmount = bidAmount;
    }

    public DiceEnum getBiddingDiceEnum() {
        return biddingDiceEnum;
    }

    public void setBiddingDiceEnum(DiceEnum biddingDiceEnum) {
        this.biddingDiceEnum = biddingDiceEnum;
    }

    public Integer getTotalPlayerForThisRun() {
        return totalPlayerForThisRun;
    }

    public void setTotalPlayerForThisRun(Integer totalPlayerForThisRun) {
        this.totalPlayerForThisRun = totalPlayerForThisRun;
    }

    public boolean isStatusWin() {
        return statusWin;
    }

    public void setStatusWin(boolean statusWin) {
        this.statusWin = statusWin;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public Integer getResultAmount() {
        return resultAmount;
    }

    public void setResultAmount(Integer resultAmount) {
        this.resultAmount = resultAmount;
    }

    public boolean isWithdrawStatus() {
        return withdrawStatus;
    }

    public void setWithdrawStatus(boolean withdrawStatus) {
        this.withdrawStatus = withdrawStatus;
    }

    public Integer getWithdrawAmount() {
        return withdrawAmount;
    }

    public void setWithdrawAmount(Integer withdrawAmount) {
        this.withdrawAmount = withdrawAmount;
    }

    public Player() {
    }

    public Player(String playerId, String playerName, BidEnum bidAmount, DiceEnum biddingDiceEnum, Integer totalPlayerForThisRun, boolean statusWin, String result, Integer resultAmount, boolean withdrawStatus, Integer withdrawAmount) {
        this.playerId = playerId;
        this.playerName = playerName;
        this.bidAmount = bidAmount;
        this.biddingDiceEnum = biddingDiceEnum;
        this.totalPlayerForThisRun = totalPlayerForThisRun;
        this.statusWin = statusWin;
        this.result = result;
        this.resultAmount = resultAmount;
        this.withdrawStatus = withdrawStatus;
        this.withdrawAmount = withdrawAmount;
    }

    @Override
    public String toString() {
        return "Player{" +
                "playerId='" + playerId + '\'' +
                ", playerName='" + playerName + '\'' +
                ", bidAmount=" + bidAmount +
                ", biddingDiceEnum=" + biddingDiceEnum +
                ", totalPlayerForThisRun=" + totalPlayerForThisRun +
                ", statusWin=" + statusWin +
                ", result='" + result + '\'' +
                ", resultAmount=" + resultAmount +
                ", withdrawStatus=" + withdrawStatus +
                ", withdrawAmount=" + withdrawAmount +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Player)) return false;
        Player player = (Player) o;
        return isStatusWin() == player.isStatusWin() && isWithdrawStatus() == player.isWithdrawStatus() && getPlayerId().equals(player.getPlayerId()) && getPlayerName().equals(player.getPlayerName()) && getBidAmount() == player.getBidAmount() && getBiddingDiceEnum() == player.getBiddingDiceEnum() && getTotalPlayerForThisRun().equals(player.getTotalPlayerForThisRun()) && getResult().equals(player.getResult()) && getResultAmount().equals(player.getResultAmount()) && Objects.equals(getWithdrawAmount(), player.getWithdrawAmount());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPlayerId(), getPlayerName(), getBidAmount(), getBiddingDiceEnum(), getTotalPlayerForThisRun(), isStatusWin(), getResult(), getResultAmount(), isWithdrawStatus(), getWithdrawAmount());
    }
}
