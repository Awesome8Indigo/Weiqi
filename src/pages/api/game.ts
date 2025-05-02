
class Game {
    private players: string[];
    private timeLimit: number;
    private byoYomi: number;
    private komi: number;
    private size: number;
    
    public constructor(players, timeLimit=7, byoYomi=30, komi=6.5, size=9) {
        this.players = players;
        this.timeLimit = timeLimit*60; //returns time limit in seconds
        this.byoYomi = byoYomi;
        this.komi = komi;
        this.size = size;
    }
    playerAdd(player) {
        if (this.players.length >= 2) {
            //check if max amt of players are in the game
            this.players.push(player)
            return true;
            //return true in order to render the game
        }
        return false;
        //return false in order to render "game full" UI.
    } //bool return in order to check later on to see if the operation was successful

}